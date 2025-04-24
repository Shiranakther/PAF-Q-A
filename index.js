const questions = [
    
        {
          "question": "Which of the following best describes a framework?",
          "answers": [
            "It provides utility functions only",
            "You control the program flow entirely",
            "It calls your code and manages the flow",
            "It cannot be extended at all"
          ],
          "correct": 2,
          "explanation": "A framework provides a structure and controls the program flow by calling your code at specific points, unlike libraries where you call the functions yourself."
        },
        {
          "question": "Why do developers use frameworks?",
          "answers": [
            "To complicate development",
            "To avoid community support",
            "To save time and reuse code",
            "To write everything from scratch"
          ],
          "correct": 2,
          "explanation": "Frameworks offer reusable components and best practices, which help developers save time and build reliable applications more efficiently."
        },
        {
          "question": "Frameworks help reduce development time by:",
          "answers": [
            "Offering pre-built components and structure",
            "Avoiding reusable code",
            "Providing low-level hardware access",
            "Limiting customization options"
          ],
          "correct": 0,
          "explanation": "By giving developers a solid foundation and reusable modules, frameworks speed up development and reduce repetitive coding."
        },
        {
          "question": "Which is true about frameworks compared to libraries?",
          "answers": [
            "Frameworks don’t allow extension",
            "Frameworks manage the main flow and call your code",
            "Libraries call your code",
            "Frameworks are easier to write from scratch"
          ],
          "correct": 1,
          "explanation": "The key difference is inversion of control — with frameworks, your code fits into their structure, while with libraries, you’re in charge of calling them."
        },
        
            {
              "question": "One downside of using a framework is:",
              "answers": [
                "You must follow its structure and limitations",
                "It provides no default features",
                "You always understand the full programming language deeply",
                "You can rewrite the core"
              ],
              "correct": 0,
              "explanation": "Frameworks often impose certain structures and rules, which can limit flexibility if you want to deviate from their design patterns."
            },
            {
              "question": "What is one major advantage of using a framework?",
              "answers": [
                "No support for updates",
                "You must code everything manually",
                "Easier debugging and code reuse",
                "Decreased speed of development"
              ],
              "correct": 2,
              "explanation": "Frameworks provide built-in tools and best practices, making debugging easier and encouraging code reuse, which boosts productivity."
            },
            {
              "question": "What might be a problem if the wrong framework is chosen?",
              "answers": [
                "Better user experience",
                "Increased performance",
                "Negative impact on performance and UX",
                "None of the above"
              ],
              "correct": 2,
              "explanation": "Using a framework that doesn't align with your project needs can slow performance, confuse users, or increase development complexity."
            },
            {
              "question": "Which statement is true about framework updates?",
              "answers": [
                "You must keep up with new/deprecated features",
                "Updates always remove bugs",
                "They never change features",
                "You can skip updates without issues"
              ],
              "correct": 0,
              "explanation": "Frameworks evolve constantly, and updates may introduce new features or deprecate old ones, so developers need to stay updated."
            },
            {
              "question": "What is ‘Inversion of Control’ in a framework?",
              "answers": [
                "Control of the application flow is given to the framework",
                "The code is written in reverse",
                "The framework only supports reverse loops",
                "User defines the entire flow"
              ],
              "correct": 0,
              "explanation": "Inversion of Control means the framework decides when and how to call your code, flipping the usual control direction you’d have in a regular program."
            },
            {
              "question": "What’s a key limitation of frameworks?",
              "answers": [
                "Full freedom in design",
                "Can't tweak core functionalities easily",
                "Lack of default behavior",
                "Easy learning curve"
              ],
              "correct": 1,
              "explanation": "Frameworks often hide or lock core logic, making it hard to change underlying behavior without major workarounds."
            },
            {
              "question": "Which of these is not an advantage of using frameworks?",
              "answers": [
                "Less boilerplate code",
                "Improved security practices",
                "Accelerated development",
                "Full control over core framework logic"
              ],
              "correct": 3,
              "explanation": "Frameworks simplify development, but they usually abstract or lock core logic to keep things consistent — so full control isn't always possible."
            },
            {
              "question": "Frameworks are often large because:",
              "answers": [
                "They only contain minimal features",
                "They serve many use cases, not just one",
                "They are handwritten",
                "They require manual compilation"
              ],
              "correct": 1,
              "explanation": "Frameworks are built to support a wide range of applications, so they include many built-in features, making them larger in size."
            },
            {
              "question": "What is ‘boilerplate code’?",
              "answers": [
                "Code reused often with minimal changes",
                "Code that never runs",
                "Obsolete framework functions",
                "Binary-only code"
              ],
              "correct": 0,
              "explanation": "Boilerplate code is repetitive code that's necessary to set up the structure of a program, often reused with little or no modification."
            },
            {
              "question": "Which of these is a trait of a framework?",
              "answers": [
                "No default behavior",
                "Doesn’t allow customization",
                "Can’t be extended",
                "Has extensibility features"
              ],
              "correct": 3,
              "explanation": "Good frameworks are designed to be extensible, letting developers build on top of the base functionality without altering the core."
            },
            {
              "question": "Non-modifiable framework code means:",
              "answers": [
                "You can rewrite core logic",
                "You can only extend, not change, the framework",
                "You can remove all modules",
                "You can switch languages"
              ],
              "correct": 1,
              "explanation": "Most frameworks are closed to core modifications but allow extension — you can add behavior, not rewrite the underlying code."
            },
            
                {
                  "question": "A major trait of frameworks is that they usually:",
                  "answers": [
                    "Are open-source",
                    "Come with their own control flow",
                    "Require you to build everything",
                    "Are built only in C++"
                  ],
                  "correct": 1,
                  "explanation": "Frameworks usually manage the control flow of your application, meaning they decide when your code runs by calling it at specific points."
                },
                {
                  "question": "Choosing the wrong framework can result in:",
                  "answers": [
                    "Faster updates",
                    "Poor performance and limited UX",
                    "Better resource usage",
                    "Easier learning"
                  ],
                  "correct": 1,
                  "explanation": "If the framework doesn't match the project needs, it can lead to slow performance, poor user experience, and more dev headaches."
                },
                {
                  "question": "Which one is a Java-based framework?",
                  "answers": [
                    "Vue.js",
                    "Spring Boot",
                    "Laravel",
                    "Express.js"
                  ],
                  "correct": 1,
                  "explanation": "Spring Boot is a popular framework for building Java-based web apps with less boilerplate and more focus on functionality."
                },
                {
                  "question": "Using a framework might NOT be suitable when:",
                  "answers": [
                    "You want structured code",
                    "The project is small and needs flexibility",
                    "You want to minimize development time",
                    "You prefer using built-in components"
                  ],
                  "correct": 1,
                  "explanation": "Frameworks can be overkill for tiny projects that just need flexibility and minimal setup — sometimes plain code is better."
                },
                {
                  "question": "Which of the following is common with framework-based dev?",
                  "answers": [
                    "Need to write all code from scratch",
                    "Automatic optimization features",
                    "Lack of updates",
                    "No community support"
                  ],
                  "correct": 1,
                  "explanation": "Modern frameworks often come with optimization features like lazy loading, routing, and performance tweaks built-in."
                },
                {
                  "question": "Which one is a front-end framework?",
                  "answers": [
                    ".NET Core",
                    "Laravel",
                    "Vue.js",
                    "Spring Boot"
                  ],
                  "correct": 2,
                  "explanation": "Vue.js is a progressive JavaScript framework for building interactive front-end user interfaces with components."
                },
                {
                  "question": "Laravel is a framework built using:",
                  "answers": [
                    "PHP",
                    "JavaScript",
                    "Java",
                    "C#"
                  ],
                  "correct": 0,
                  "explanation": "Laravel is a powerful PHP framework focused on elegant syntax and robust features for web app development."
                },
                {
                  "question": "Express.js is commonly used with:",
                  "answers": [
                    "Python",
                    "PHP",
                    "Node.js",
                    "Java"
                  ],
                  "correct": 2,
                  "explanation": "Express.js is a lightweight web application framework for Node.js, often used to build APIs and server-side apps."
                },
                {
                  "question": "A framework is best used when:",
                  "answers": [
                    "You want fast, structured development",
                    "You need full control and flexibility",
                    "You plan to write low-level drivers",
                    "You are building firmware"
                  ],
                  "correct": 0,
                  "explanation": "Frameworks shine in structured app development where speed, consistency, and maintainability are key."
                },
                {
                  "question": "What happens if a dev learns the framework but not the language?",
                  "answers": [
                    "The framework teaches everything",
                    "They might struggle outside the framework",
                    "Deep understanding of language is gained",
                    "Bugs are easier to fix"
                  ],
                  "correct": 1,
                  "explanation": "Relying only on a framework without knowing the core language can limit flexibility and cause confusion in non-framework projects."
                },
                
                    {
                      "question": "Why should you follow version updates of frameworks?",
                      "answers": [
                        "Just for fun",
                        "To avoid new features",
                        "To avoid using deprecated or insecure features",
                        "They never affect performance"
                      ],
                      "correct": 2,
                      "explanation": "Keeping up with updates helps you avoid deprecated methods, security vulnerabilities, and ensures compatibility with the ecosystem."
                    },
                    {
                      "question": "Frameworks usually offer:",
                      "answers": [
                        "No caching mechanisms",
                        "Limited performance tools",
                        "Optimization for resource-heavy tasks",
                        "Only front-end solutions"
                      ],
                      "correct": 2,
                      "explanation": "Frameworks often come with built-in tools to handle heavy tasks efficiently, like caching, lazy loading, and optimized routing."
                    },
                    {
                      "question": "Community support in frameworks is useful because:",
                      "answers": [
                        "It avoids collaboration",
                        "You don’t need tutorials",
                        "You can get solutions and contribute",
                        "Everyone writes solo"
                      ],
                      "correct": 2,
                      "explanation": "Active communities provide tutorials, solutions, plugins, and even bug fixes—plus you can contribute back, which is pretty dope."
                    },
                    {
                      "question": "Frameworks improve productivity by:",
                      "answers": [
                        "Avoiding reusable modules",
                        "Letting devs reinvent the wheel",
                        "Reducing time through code reuse",
                        "Removing documentation"
                      ],
                      "correct": 2,
                      "explanation": "They offer ready-to-use components and patterns, so you don’t have to build everything from scratch. Big time-saver."
                    },
                    {
                      "question": "Which is a benefit of using frameworks in team projects?",
                      "answers": [
                        "No consistent structure",
                        "Randomized styles",
                        "Unified structure and faster collaboration",
                        "Each dev must write all parts manually"
                      ],
                      "correct": 2,
                      "explanation": "Frameworks enforce structure, making it easier for teams to collaborate without stepping on each other’s toes."
                    },
                    {
                      "question": "What should each feature have according to Git branching best practices?",
                      "answers": [
                        "A separate repo",
                        "A dedicated branch",
                        "A unique commit ID",
                        "A backup zip file"
                      ],
                      "correct": 1,
                      "explanation": "Best practice is to give each feature its own branch to keep things clean and organized for testing and merging."
                    },
                    {
                      "question": "How many people should ideally work on a single feature branch?",
                      "answers": [
                        "Two developers",
                        "Any number",
                        "Just one",
                        "Depends on the feature size"
                      ],
                      "correct": 2,
                      "explanation": "One dev per feature branch is ideal to reduce conflicts, keep history simple, and avoid messy merges."
                    },
                    {
                      "question": "When should a feature branch be deleted?",
                      "answers": [
                        "Before it's merged",
                        "After it’s pushed",
                        "After merging into master",
                        "When tests fail"
                      ],
                      "correct": 2,
                      "explanation": "Once a branch is merged and deployed, it’s best to delete it to avoid clutter and confusion in your repo."
                    },
                    {
                      "question": "Why should feature branches be short-lived?",
                      "answers": [
                        "Easier to track updates",
                        "Keeps the main branch locked",
                        "To avoid stale or outdated code",
                        "So Git runs faster"
                      ],
                      "correct": 2,
                      "explanation": "Short-lived branches help prevent merge conflicts and keep the codebase fresh with the latest updates."
                    },
                    {
                      "question": "Which action helps avoid merge conflicts?",
                      "answers": [
                        "Working on master",
                        "Never merging",
                        "Merging early and often",
                        "Committing once"
                      ],
                      "correct": 2,
                      "explanation": "Merging regularly keeps your branch in sync with the main line, making conflicts easier to manage or even avoid."
                    },
                    {
                      "question": "What kind of code should go in the master branch?",
                      "answers": [
                        "Experimental",
                        "Production-ready",
                        "Debug logs",
                        "Unmerged feature changes"
                      ],
                      "correct": 1,
                      "explanation": "Master (or main) should only hold stable, tested, production-ready code to ensure the live app doesn’t break."
                    },
                    {
                      "question": "What’s a good example of a branch naming convention?",
                      "answers": [
                        "fix_this_branch",
                        "mybranch123",
                        "feature/vishan.j/add-dark-mode",
                        "temp-featureX"
                      ],
                      "correct": 2,
                      "explanation": "Using a clear naming convention like `feature/username/description` makes branches easier to understand and manage."
                    },
                    {
                      "question": "What should NOT be done directly on the master branch?",
                      "answers": [
                        "Create new branches",
                        "Push bugfixes",
                        "Develop new features",
                        "Pull from remote"
                      ],
                      "correct": 2,
                      "explanation": "Never build new features directly on master—use feature branches so master stays stable and conflict-free."
                    },
                    {
                      "question": "Which command keeps the history cleaner?",
                      "answers": ["git stash", "git rebase", "git commit -am", "git merge"],
                      "correct": 1,
                      "explanation": "Git rebase creates a linear history by applying changes on top of the latest commit—super clean and easy to follow."
                    },
                    {
                      "question": "When using CI/CD, what happens after a pull request is merged?",
                      "answers": [
                        "GitHub auto-archives the project",
                        "Tests run, and code is deployed",
                        "It’s added to the to-do list",
                        "The repo is forked"
                      ],
                      "correct": 1,
                      "explanation": "In CI/CD, merging a PR usually triggers automated tests and deployments—boom, live changes without manual effort."
                    },
                    {
                      "question": "Why might Git Rebase be better than Git Merge?",
                      "answers": [
                        "Skips file staging",
                        "Deletes all conflicts",
                        "Adds commit history clarity",
                        "Works faster"
                      ],
                      "correct": 2,
                      "explanation": "Rebasing rewrites the commit history to be cleaner and more linear, which is great for clarity and traceability."
                    },
                    {
                      "question": "Which one is a safer option when collaborating with others?",
                      "answers": ["Git Merge", "Git Rebase", "Git Tag", "Git Ignore"],
                      "correct": 0,
                      "explanation": "Git merge is safer for teams because it keeps the full commit history and avoids rewriting others' work."
                    },
                    {
                        "question": "Why are atomic commits preferred?",
                        "answers": ["They auto-deploy", "They increase performance", "They can’t be reverted", "They allow better tracking"],
                        "correct": 3,
                        "explanation": "Atomic commits make it easier to track changes and revert individual changes without affecting other parts of the project."
                      },
                      {
                        "question": "What is one key aspect of GitHub Flow?",
                        "answers": ["Never using branches", "Committing directly to live server", "Multiple people working on master", "Feature branches + pull requests"],
                        "correct": 3,
                        "explanation": "GitHub Flow encourages using feature branches for new changes and merging them through pull requests after review."
                      },
                      {
                        "question": "Why should you write good commit messages?",
                        "answers": ["So you can forget the code", "To confuse the devs", "To help teammates understand changes", "To make your commits longer"],
                        "correct": 2,
                        "explanation": "Good commit messages help teammates understand what was changed and why, making collaboration more efficient."
                      },
                      {
                        "question": "What should you avoid doing in a single commit?",
                        "answers": ["Adding comments", "Fixing bugs", "Pushing code", "Multiple unrelated changes"],
                        "correct": 3,
                        "explanation": "A commit should focus on a single logical change, making it easier to review and maintain."
                      },
                      {
                        "question": "How often should you commit code?",
                        "answers": ["Only once per feature", "As often as you make progress", "Once per day", "Only when the task is 100% complete"],
                        "correct": 1,
                        "explanation": "Committing frequently helps keep changes manageable and reduces the risk of losing work."
                      },
                      {
                        "question": "What is the main focus of trunk-based development?",
                        "answers": ["Frequent code rewrites", "Directly committing to master", "Long feature branches", "Using many branch levels"],
                        "correct": 1,
                        "explanation": "Trunk-based development emphasizes making small, frequent commits to the main branch, promoting continuous integration."
                      },
                      {
                        "question": "Which Git strategy uses long-lived branches like develop and release?",
                        "answers": ["GitFlow", "GitMono", "GitHub Flow", "DevOps Sync"],
                        "correct": 0,
                        "explanation": "GitFlow uses long-lived branches like develop and release to manage different stages of development."
                      },
                      {
                        "question": "Why should you pull changes from origin/main before creating a new branch?",
                        "answers": ["To revert old commits", "To delete old branches", "To remove bugs", "To ensure latest updates are included"],
                        "correct": 3,
                        "explanation": "Pulling the latest changes ensures your new branch starts from the most current version of the code."
                      },
                      {
                        "question": "What is a key benefit of CI/CD pipelines?",
                        "answers": ["Automated testing and deployment", "Manual deployment", "Faster code reviews", "Shorter commit messages"],
                        "correct": 0,
                        "explanation": "CI/CD pipelines automate testing and deployment, improving code quality and accelerating delivery."
                      },
                      {
                        "question": "Why is it okay to push unfinished code to remote?",
                        "answers": ["It deletes the branch", "It’s considered final", "Others will finish it", "For safekeeping"],
                        "correct": 3,
                        "explanation": "Pushing unfinished code to remote ensures it is backed up and visible to teammates, who can continue or review it."
                      },
                      {
                        "question": "Where should your local branch be pushed regularly?",
                        "answers": ["Remote", "Main branch", "Desktop backup", "GitHub Pages"],
                        "correct": 0,
                        "explanation": "Regularly pushing your local branch to the remote repository ensures your changes are safely stored and accessible."
                      },
                      {
                        "question": "Which of the following is a branching strategy?",
                        "answers": ["GitFlow", "DevDiver", "GitYolo", "BranchBoss"],
                        "correct": 0,
                        "explanation": "GitFlow is a well-known branching strategy that defines a workflow for managing feature, develop, and release branches."
                      },
                      {
                        "question": "What is a pull request?",
                        "answers": ["A request to delete a branch", "A request to merge your branch into another", "A way to copy another repo", "A Git bug report"],
                        "correct": 1,
                        "explanation": "A pull request is used to propose changes from one branch to another, typically to merge feature branches into the main branch."
                      },
                      {
                        "question": "What type of changes are encouraged?",
                        "answers": ["Once-a-week dumps", "Small, incremental changes", "Big commits with multiple features", "Large code overhauls"],
                        "correct": 1,
                        "explanation": "Small, incremental changes are easier to manage, test, and review than large, complex changes."
                      },
                      {
                        "question": "Why are pull requests useful?",
                        "answers": ["Bypass CI/CD", "Trigger team reviews", "Avoid versioning", "Hide your code"],
                        "correct": 1,
                        "explanation": "Pull requests trigger team reviews, enabling collaborative discussion and improving code quality before merging."
                      },
                      {
                        "question": "When using git rebase, what must you watch out for?",
                        "answers": ["Force push blocking", "Broken branches", "Rewrite of commit history", "Commit duplication"],
                        "correct": 2,
                        "explanation": "Git rebase rewrites commit history, which can cause issues when collaborating if not handled carefully."
                      },
                      {
                        "question": "Which of the following reduces the chance of merge conflicts?",
                        "answers": ["Large commits", "Ignoring pulls", "Frequent merges", "Manual patching"],
                        "correct": 2,
                        "explanation": "Frequent merges ensure that changes are integrated regularly, reducing the likelihood of conflicting changes building up."
                      },
                      {
                        "question": "Which of the following is NOT recommended Git behavior?",
                        "answers": ["Use consistent branch naming", "Push often", "Work directly on master", "Commit often"],
                        "correct": 2,
                        "explanation": "Working directly on the master branch is risky because it can disrupt stable code. It’s better to work on feature branches."
                      },
                      {
                        "question": "What's a major challenge with microservices?",
                        "answers": ["Slow deployment", "High global complexity", "No local changes", "Static UI"],
                        "correct": 1,
                        "explanation": "Microservices introduce high complexity due to the need to manage multiple independent services that interact with each other."
                      },
                      {
                        "question": "What does 'global complexity' in microservices refer to?",
                        "answers": ["UI rendering complexity", "Cost of the cloud", "Interactions and dependencies between services", "Coding difficulty within one module"],
                        "correct": 2,
                        "explanation": "Global complexity refers to the difficulty of managing the interactions and dependencies between various services in a microservices architecture."
                      },
                      {
                        "question": "Which of the following is considered a downside of microservices?",
                        "answers": ["Single codebase", "High infrastructure costs", "Fast deployments", "Less debugging effort"],
                        "correct": 1,
                        "explanation": "Microservices require managing multiple services, which can lead to higher infrastructure and operational costs."
                      },
                      {
                        "question": "In the context of microservices, 'local complexity' means:",
                        "answers": ["The internal implementation of a service", "DNS routing", "Code reuse issues", "Micro UI rendering"],
                        "correct": 0,
                        "explanation": "Local complexity refers to the challenges within a single microservice, such as its internal design and functionality."
                      },
                      {
                        "question": "Why is debugging harder in microservices?",
                        "answers": ["Because everything is stored in one file", "The logs are automatically deleted", "You have to trace across multiple services", "It lacks debugging tools"],
                        "correct": 2,
                        "explanation": "Debugging microservices can be difficult because issues may span multiple services, requiring coordination between logs and systems."
                      },
                      {
                        "question": "What is the “Big Ball of Mud” in architecture?",
                        "answers": ["A monolithic CI/CD model", "An anti-pattern describing tangled, messy software structure", "A frontend rendering strategy", "A type of database"],
                        "correct": 1,
                        "explanation": "The 'Big Ball of Mud' is an anti-pattern in software architecture, describing a system with tangled and unstructured code that’s hard to maintain."
                      },
                      {
                        "question": "Which situation is most likely to lead to a “Big Ball of Mud”?",
                        "answers": ["Modular components", "Lack of service boundaries", "High test coverage", "Using serverless functions"],
                        "correct": 1,
                        "explanation": "Lack of clear boundaries between services can lead to a chaotic architecture, resulting in a 'Big Ball of Mud.'"
                      },
                      {
                        "question": "What’s a common risk when managing too many microservices?",
                        "answers": ["Simple user flows", "Scalable infrastructure", "Over-complexity and tangled dependencies", "Fewer deployments"],
                        "correct": 2,
                        "explanation": "Too many microservices can result in excessive complexity and tangled dependencies, making management harder."
                      },
                      {
                        "question": "What role does an API Gateway play in microservices?",
                        "answers": ["Backend-only deployment", "UI Rendering", "Authentication, throttling, orchestration", "Code deployment"],
                        "correct": 2,
                        "explanation": "An API Gateway handles requests from clients, managing authentication, traffic routing, and load balancing between microservices."
                      },
                      {
                        "question": "Which tool helps with caching in a microservices architecture?",
                        "answers": ["Docker", "Redis", "Postman", "Webpack"],
                        "correct": 1,
                        "explanation": "Redis is commonly used for caching in microservices architectures to improve performance by reducing the load on services."
                      },
                      {
                        "question": "What do load balancers do?",
                        "answers": ["Distribute traffic across services", "Secure APIs", "Replace caching", "Generate documentation"],
                        "correct": 0,
                        "explanation": "Load balancers distribute incoming traffic across multiple services to prevent overload and ensure high availability."
                      },
                      {
                        "question": "Which of these is a good use-case for message queues in microservices?",
                        "answers": ["UI design", "Database modeling", "Async communication between services", "Serving HTML"],
                        "correct": 2,
                        "explanation": "Message queues allow asynchronous communication between microservices, improving decoupling and scalability."
                      },
                      {
                        "question": "What does the Richardson Maturity Model evaluate?",
                        "answers": ["Frontend backend interaction", "API security level", "REST API's conformity to REST constraints", "HTTP method performance"],
                        "correct": 2,
                        "explanation": "The Richardson Maturity Model evaluates how closely an API conforms to REST constraints, from basic to fully RESTful."
                      },
                      {
                        "question": "What’s the purpose of a CDN (Content Delivery Network)?",
                        "answers": ["Run container orchestration", "Store logs", "Compile frontend code", "Cache and serve static content closer to users"],
                        "correct": 3,
                        "explanation": "CDNs cache static content closer to users, reducing latency and improving load times for websites and applications."
                      },
                      {
                        "question": "Which of the following contrasts with microservices in structure?",
                        "answers": ["Distributed system", "CI/CD", "Monolithic architecture", "Component-based frontend"],
                        "correct": 2,
                        "explanation": "Monolithic architecture contrasts with microservices by relying on a single, unified codebase, which can lead to scalability issues."
                      },
                      {
                        "question": "What is the characteristic of Level-0 in the Richardson Maturity Model?",
                        "answers": ["Uses PUT and DELETE", "One URI for the entire application", "Uses HTTP GET", "Multiple URIs"],
                        "correct": 1,
                        "explanation": "Level-0 in the Richardson Maturity Model is characterized by a single URI for all resources, lacking RESTful features."
                      },
                      {
                        "question": "What is the goal of BFF/BIF?",
                        "answers": ["Write SOAP APIs", "Build a backend UI", "Tailor backend logic to the needs of each frontend", "Backend-only management"],
                        "correct": 2,
                        "explanation": "BFF/BIF aims to optimize backend logic for specific frontend needs, creating a customized API layer."
                      },
                      {
                        "question": "Which of these technologies virtualizes hardware for software environments?",
                        "answers": ["Kubernetes", "REST APIs", "Docker Compose", "Virtual Machines (VMs)"],
                        "correct": 3,
                        "explanation": "Virtual Machines (VMs) virtualize hardware resources to run multiple software environments on a single physical machine."
                      },
                      {
                        "question": "Who proposed the Richardson Maturity Model?",
                        "answers": ["Leonard Richardson", "Roy Fielding", "Tim Berners-Lee", "Martin Fowler"],
                        "correct": 0,
                        "explanation": "The Richardson Maturity Model was proposed by Leonard Richardson as a way to assess the maturity of a RESTful API."
                     },
                     {
                        "question": "What does BFF (Backend for Frontend) aim to do?",
                        "answers": ["Deploy only CSS", "Run background jobs", "Debug the frontend", "Provide a backend optimized for each frontend"],
                        "correct": 3,
                        "explanation": "BFF (Backend for Frontend) aims to create a backend that is tailored to the needs of a specific frontend, enhancing performance and usability."
                     },
                     {
                        "question": "Which of the following best describes Level-1 in the Richardson Maturity Model?",
                        "answers": ["Uses JSON only", "Introduces resource-based URIs", "Uses HTTP Verbs", "Uses HATEOAS"],
                        "correct": 1,
                        "explanation": "Level-1 introduces resource-based URIs, moving beyond a single URI approach, which is characteristic of Level-0."
                     },
                     {
                        "question": "What are Micro Frontends?",
                        "answers": ["Microservices applied to the frontend", "APIs for mobile apps", "Microservices for backend", "A CDN service"],
                        "correct": 0,
                        "explanation": "Micro Frontends refer to breaking down the frontend into smaller, independent units, similar to how microservices work on the backend."
                     },
                     {
                        "question": "At which level are HTTP methods like GET, POST, PUT, DELETE properly used?",
                        "answers": ["Level-0", "Level-3", "Level-2", "Level-1"],
                        "correct": 2,
                        "explanation": "Level-2 of the Richardson Maturity Model properly utilizes HTTP methods such as GET, POST, PUT, and DELETE."
                     },
                     {
                        "question": "What is Component-Based Architecture focused on?",
                        "answers": ["Splitting applications into reusable pieces", "API-only development", "Storing logs", "Server virtualization"],
                        "correct": 0,
                        "explanation": "Component-Based Architecture emphasizes dividing applications into reusable, modular components for better maintainability and scalability."
                     },
                     {
                        "question": "Which of the following allows storage in the cloud?",
                        "answers": ["Cloud Storage", "Git", "CDN", "VMs"],
                        "correct": 0,
                        "explanation": "Cloud Storage allows for the remote storage of data, accessible over the internet, and is a primary component of cloud computing."
                     },
                     {
                        "question": "What is introduced at Level-3 of the Richardson Maturity Model?",
                        "answers": ["HATEOAS", "JSON only", "XML", "OAuth"],
                        "correct": 0,
                        "explanation": "Level-3 introduces HATEOAS (Hypermedia as the Engine of Application State), allowing clients to navigate through REST APIs dynamically."
                     },
                     {
                        "question": "Which HTTP method is used to retrieve a resource?",
                        "answers": ["POST", "DELETE", "PUT", "GET"],
                        "correct": 3,
                        "explanation": "The HTTP GET method is used to retrieve resources from the server."
                     },
                     {
                        "question": "Which HTTP method should you use to update an existing resource?",
                        "answers": ["DELETE", "PUT", "POST", "HEAD"],
                        "correct": 1,
                        "explanation": "The PUT method is used to update an existing resource with new data."
                     },
                     {
                        "question": "What does the HTTP status code 200 mean?",
                        "answers": ["Internal Server Error", "Resource Created", "OK", "Not Found"],
                        "correct": 2,
                        "explanation": "HTTP status code 200 means the request was successful and the server responded with the requested data."
                     },
                     {
                        "question": "Which status code indicates a server error?",
                        "answers": ["500", "400", "201", "404"],
                        "correct": 0,
                        "explanation": "HTTP status code 500 indicates a server error, meaning the server encountered an issue processing the request."
                     },
                     {
                        "question": "What is HAL used for in REST?",
                        "answers": ["Handling database transactions", "Creating HTML", "Structuring RESTful resources", "Frontend rendering"],
                        "correct": 2,
                        "explanation": "HAL (Hypertext Application Language) is used for structuring RESTful resources to make them easier to navigate and interact with."
                     },
                     {
                        "question": "Which of the following is not a best practice?",
                        "answers": ["Accept and return JSON", "Make one massive URI with multiple actions", "Keep API consistent", "Use consistent HTTP status codes"],
                        "correct": 1,
                        "explanation": "A good API design avoids having one massive URI with multiple actions, as it makes the API harder to maintain and use."
                     },
                     {
                        "question": "What is recommended as a response format for REST APIs?",
                        "answers": ["HTML", "JSON", "XML only", "CSV"],
                        "correct": 1,
                        "explanation": "JSON is the most common and preferred response format for REST APIs due to its simplicity and ease of use."
                     },
                     {
                        "question": "What is a best practice when naming URIs?",
                        "answers": ["Make them meaningful and resource-based", "Use port numbers", "Use camelCase", "Include action verbs"],
                        "correct": 0,
                        "explanation": "URIs should be meaningful and resource-based, following REST principles for clear and intuitive navigation."
                     },
                     {
                        "question": "Which HTTP header is used to specify the format of the data being sent?",
                        "answers": ["Status-Code", "Content-Type", "Authorization", "Cache-Control"],
                        "correct": 1,
                        "explanation": "The Content-Type header specifies the format of the data being sent in the request or response."
                     },
                     {
                        "question": "Which of these is a lightweight, human-readable format used in REST APIs?",
                        "answers": ["JSON", "CSV", "XML", "HTML"],
                        "correct": 0,
                        "explanation": "JSON is a lightweight, human-readable data format commonly used in REST APIs for its ease of parsing and manipulation."
                     },
                     {
                        "question": "Which is a commonly used authentication method for REST APIs?",
                        "answers": ["OAuth", "SSL", "SHA256", "JSON"],
                        "correct": 0,
                        "explanation": "OAuth is a commonly used authentication method for REST APIs, providing secure access to protected resources."
                     },
                     {
                        "question": "What does JSON stand for?",
                        "answers": ["Joint Structure of Objects Notation", "JavaScript Object Notation", "Java Sync Operation Network", "Java Source Object Notation"],
                        "correct": 1,
                        "explanation": "JSON stands for JavaScript Object Notation, a lightweight data interchange format widely used in web applications."
                     },
                     {
                        "question": "What does a 404 HTTP status code represent?",
                        "answers": ["Authorization failure", "Client error: resource not found", "Successful creation", "Server overload"],
                        "correct": 1,
                        "explanation": "A 404 HTTP status code represents a client error indicating that the requested resource was not found on the server."
                     },
                     {
                        "question": "Before performing an API operation, what is a best practice?",
                        "answers": ["Use only GET requests", "Avoid authentication", "Use proper headers and status codes", "Send everything as query params"],
                        "correct": 2,
                        "explanation": "Using proper headers and status codes ensures that the API operates in a standardized and predictable manner."
                     }
                     
                      
                  
                  
              
          
      
      
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p class="question">${index + 1}. ${q.question}</p>
      <ul class="answers">
        ${q.answers.map((answer, i) => `
          <li>
            <label>
              <input type="radio" name="q${index}" value="${i}" />
              ${answer}
            </label>
          </li>
        `).join("")}
      </ul>
    `;
    quizContainer.appendChild(div);
  });
  
  document.getElementById("quiz-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let score = 0;
  
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      const container = document.getElementsByClassName("answers")[index];
      container.classList.remove("correct", "incorrect");
  
      // Remove any old explanation
      let oldExplanation = container.querySelector(".explanation");
      if (oldExplanation) oldExplanation.remove();
  
      // Create explanation div
      const explanation = document.createElement("div");
      explanation.classList.add("explanation");
      explanation.textContent = q.explanation;
  
      if (selected) {
        if (parseInt(selected.value) === q.correct) {
          container.classList.add("correct");
          score++;
          explanation.style.borderLeft = "4px solid #38b000";
        } else {
          container.classList.add("incorrect");
          explanation.style.borderLeft = "4px solid #d00000";
        }
      } else {
        container.classList.add("incorrect");
        explanation.style.borderLeft = "4px solid #d00000";
      }
  
      container.appendChild(explanation);
    });
  
    const resultDiv = document.getElementById("result");
    const percentage = (score / questions.length) * 100;
    resultDiv.textContent = `You scored ${percentage.toFixed(2)}% (${score} out of ${questions.length})`;
  
    if (percentage === 100) {
      resultDiv.textContent += " 🎉 Perfect!";
    } else if (percentage >= 50) {
      resultDiv.textContent += " 👍 Not bad!";
    } else {
      resultDiv.textContent += " 😬 Try again!";
    }
  });
  