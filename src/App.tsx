import * as React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { Layout, Button } from "antd.macro";
import Intro from "./Intro";
import IssueForm from "./IssueForm";
import LocaleContext, { switchLocale } from "./LocaleContext";
import styles from "./App.module.scss";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const locale = React.useContext(LocaleContext);

  const appLocale = window.appLocale[locale];
  addLocaleData(appLocale.data);

  return (
    <LocaleContext.Provider>
      <Layout className="layout">
        <Header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <span className={styles.recharts}>{"<Recharts/>"}</span>
              <h1>Issue Helper</h1>
            </div>
            <div className={styles.locale}>
              <Button size="small" onClick={switchLocale}>
                {locale === "en" ? "中文" : "English"}
              </Button>
            </div>
          </div>
        </Header>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
          <Content className={styles.content}>
            <Intro />
            <IssueForm />
          </Content>
        </IntlProvider>
        <Footer style={{ textAlign: "center" }}>
          Forked from{" "}
          <a
            href="http://new-issue.ant.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antd Issue Helper
          </a>{" "}
          to{" "}
          <a href="https://github.com/recharts/recharts-issue-helper">
            Recharts Issue Helper
          </a>
        </Footer>
      </Layout>
    </LocaleContext.Provider>
  );
};

export default App;
