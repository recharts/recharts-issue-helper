所谓『重现』，就是一段可以运行并展示一个 bug 如何发生的代码。

##### 文字是不够的

如果你遇到一个问题，但是只提供了一些文字描述，我们是不可能修复这个 bug 的。首先，文字在描述技术问题时的表达难度和不精确性；其次，问题的真实原因有很多可能，它完全有可能是一个你根本没有提及的因素导致的。重现是唯一能够可靠地让我们理解问题本质的方式。

##### 重现必须是可运行的

**截图和视频不是重现**。它们仅仅证明了 bug 的存在，但却不能提供关于 bug 是如何发生的信息。只有可运行的代码提供了完整的上下文，并让我们可以进行真正的 debug 而不是空想和猜测。当然，在提供的重现的前提下，视频或是 gif 动画可以帮助解释一些比较难用文字描述的交互行为。

##### 重现应当尽量精简

有些用户会直接给我们一整个项目的代码，然后希望我们帮忙找出问题所在。此类请求我们通常不予接受，因为：

- 你对你的项目的代码结构可能已经非常熟悉，但我们并不是。阅读、运行、分析一个完全陌生的项目是极其耗费时间和精力的。

- 由于涉及了大量业务代码，问题可能是你的代码错误，而不是 recharts 的 bug 所导致的。

一个最小化的重现意味着它精确地定位了 bug 本身 - 它应当只包含能够触发 bug 的**最少量**的代码。你应当尽可能地剔除任何跟该 bug 无关的部分。

##### 如何提供一个重现

除非你的 bug 只有在构建工具下才能重现，否则我们建议使用 <a href="https://codesandbox.io/s/recharts-issue-template-k2xqp" target="_blank">CodeSandbox for recharts</a> 来提供重现。如果你的 bug 必须用到构建工具，那么我们建议使用提供 GitHub 仓库的链接。
