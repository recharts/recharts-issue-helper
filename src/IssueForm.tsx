import * as React from "react";
import { Form, Col, Input, Select, Button, Radio } from "antd.macro";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { FormattedMessage } from "react-intl";
import BugForm from "./BugForm";
import FeatureForm from "./FeatureForm";
import PreviewModal from "./PreviewModal";
import ReproModal from "./ReproModal";
import createPreview from "./createPreview";
import { state } from "reactive.macro";
import useSimilarIssues from "./hooks/useSimilarIssues";
import useVersions from "./hooks/useVersions";
import styles from "./IssueForm.module.scss";

const FormItem = Form.Item;
const { Option } = Select;

export interface Props {
  form: WrappedFormUtils;
}

const params: any = window.location.search
  .slice(1)
  .split("&")
  .reduce((acc, param) => {
    const [key, value] = param.split("=");
    return { ...acc, [key]: value };
  }, {}); // tslint:disable-line

if (!params.repo) {
  params.repo = "recharts";
}

const IssueForm: React.FC<Props> = ({ form }) => {
  let preview = state(false);
  let reproModal = state(false);

  const formRef = React.useRef<HTMLDivElement | null>(null);
  const { similarIssues, searchIssues } = useSimilarIssues();
  const { repoVersions, fetchVersions } = useVersions();

  const {
    getFieldDecorator,
    getFieldValue,
    getFieldsValue,
    setFieldsValue
  } = form;

  const bindModalHandler = React.useCallback(() => {
    formRef.current!.addEventListener("click", (e: Event) => {
      if ((e.target as any).getAttribute("href") === "#repro-modal") {
        e.preventDefault();
        reproModal = true;
      }
    });
  }, []);

  // Load form data from localStorage
  const restoreValues = React.useCallback((omitFields: Array<string> = []) => {
    const cache = localStorage.getItem("form");
    if (cache) {
      const values = JSON.parse(cache);
      const keys = Object.keys(values);

      // Remove unless fields
      omitFields.forEach(key => {
        delete values[key];
      });

      if (values.type) {
        setFieldsValue({
          type: values.type
        });
      }

      // Next frame (IE 9 not support RAF)
      setTimeout(() => {
        // Remove useless value
        const currentValues = getFieldsValue();
        keys.forEach(key => {
          if (!(key in currentValues)) {
            delete values[key];
          }
        });

        setFieldsValue(values);
      }, 100);
    }
  }, []);

  const handleRepoChange = React.useCallback((repo: string) => {
    form.resetFields(["version"]);
    if (!repoVersions[repo]) {
      fetchVersions(repo);
    }
  }, []);

  const handleTypeChange = React.useCallback(() => {
    restoreValues(["type"]);
  }, []);

  const handleTitleBlur = React.useCallback(() => {
    const repo = getFieldValue("repo");
    const title = getFieldValue("title");
    searchIssues(repo, title);
  }, []);

  const handlePreview = React.useCallback(
    (e: React.SyntheticEvent<HTMLElement>) => {
      e.preventDefault();
      form.validateFieldsAndScroll((err: any) => {
        if (!err) {
          preview = true;
        }
      });
    },
    []
  );

  const handleCreate = React.useCallback(() => {
    const issueType = getFieldValue("type");
    const repo = getFieldValue("repo");
    const title = encodeURIComponent(getFieldValue("title")).replace(
      /%2B/gi,
      "+"
    );
    const content = getContent(issueType);
    const withConfirm = `
- [ ] I have searched the [issues](https://github.com/recharts/${repo}/issues) \
of this repository and believe that this is not a duplicate.

${content}
`;
    const withMarker = `${withConfirm}\n\n<!-- generated by reccharts-issue-helper. DO NOT REMOVE -->`;
    const body = encodeURIComponent(withMarker).replace(/%2B/gi, "+");
    const label = issueType === "feature" ? "&labels=Feature%20Request" : "";

    localStorage.clear();

    window.open(
      `https://github.com/recharts/${repo}/issues/new?title=${title}&body=${body}${label}`
    );
  }, []);

  React.useEffect(() => {
    fetchVersions(params.repo);
    bindModalHandler();
    restoreValues();
  }, []);

  const getContent = (issueType: string) => {
    return createPreview(issueType, getFieldsValue());
  };

  const issueType = getFieldValue("type");
  const content = getContent(issueType);
  const repo = getFieldValue("repo");
  const versions = repoVersions[repo] || [];

  const similarIssuesList = (
    <FormItem>
      <h3>Similar Issues:</h3>
      <ul>
        {similarIssues.map(issue => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noreferrer noopener">
              {issue.title}
            </a>
          </li>
        ))}
      </ul>
    </FormItem>
  );
  console.log(params);

  return (
    <div ref={formRef}>
      <Form layout="horizontal" onSubmit={handlePreview}>
        <PreviewModal
          visible={preview}
          content={content}
          onCancel={() => (preview = false)}
          onCreate={handleCreate}
        />
        <ReproModal
          visible={reproModal}
          onCancel={() => (reproModal = false)}
        />
        <FormItem>
          <Col span={11}>
            <FormItem
              label={
                <FormattedMessage
                  id="issue.repo"
                  defaultMessage="I am opening an issue for"
                />
              }
              help={
                <FormattedMessage
                  id="issue.repoHelp"
                  defaultMessage="Please make sure to file the issue at appropriate repo."
                />
              }
            >
              {getFieldDecorator("repo", {
                initialValue: params.repo
              })(
                <Select onChange={handleRepoChange}>
                  <Option key="recharts">recharts</Option>
                  <Option key="react-smooth">react-smooth</Option>
                  <Option key="recharts-scale">recharts-scale</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={12} offset={1}>
            <FormItem
              label={
                <FormattedMessage id="issue.type" defaultMessage="This is a" />
              }
            >
              {getFieldDecorator("type", {
                initialValue: "bug"
              })(
                <Radio.Group
                  onChange={handleTypeChange}
                  className={styles.radioGroup}
                >
                  <Radio.Button value="bug">
                    <FormattedMessage
                      id="issue.type.bug"
                      defaultMessage="Bug Report"
                    />
                  </Radio.Button>
                  <Radio.Button value="feature">
                    <FormattedMessage
                      id="issue.type.feature"
                      defaultMessage="Feature Request"
                    />
                  </Radio.Button>
                </Radio.Group>
              )}
            </FormItem>
          </Col>
        </FormItem>
        <FormItem
          label={<FormattedMessage id="issue.title" defaultMessage="Title" />}
        >
          {getFieldDecorator("title", {
            rules: [{ required: true }]
          })(<Input onBlur={handleTitleBlur} />)}
        </FormItem>
        {similarIssues.length > 0 && similarIssuesList}
        {issueType !== "feature" ? (
          <BugForm form={form} versions={versions} />
        ) : (
          <FeatureForm form={form} />
        )}
        <FormItem>
          <div className={styles.submitBtn}>
            <Button type="primary" size="large" htmlType="submit">
              <FormattedMessage id="issue.preview" defaultMessage="Preview" />
            </Button>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};

export default Form.create({
  // Types is wrong in antd 3.3.0, have to cast as any
  onValuesChange(...args: any[]) {
    const values: any = args[2];
    let preForm = {};
    try {
      preForm = JSON.parse(localStorage.getItem("form") as string) || {};
    } catch (err) {
      // Do nothing
    }
    const cacheForm: any = {
      ...preForm
    };
    Object.keys(values).forEach(key => {
      if (values[key]) {
        cacheForm[key] = values[key];
      }
    });
    localStorage.setItem("form", JSON.stringify(cacheForm, null, 2));
  }
})(IssueForm);
