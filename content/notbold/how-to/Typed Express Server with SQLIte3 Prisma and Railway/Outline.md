1. Introduction 
    1. What are we going to build? How are we going to build it? Provide a warning that i'm not going to cut corners and speed through it, it you're looking for a half baked article with code that does not work. This tutorial is not for you. I'm creating this article for those with a desire to learn industry standards. If you feel that you're already at that level and don't need anyone telling you how to manage your codebase, track your work and apply performance driven concepts, you may just have to suffer through some things. But then again, if you're really at that level I'd presume you would't need an in-depth article such as this anyway as you'd be just as capable as I was when I set off to build this. It's not magic, you can do it too!
    2. Why is what were building going to be slick
    3. Who might want to use a tool like this
    4. Where could this be deployed to production?
    5. Explain how this will need minimal supervision if left as-is. It will continue to work.
    6. Describe the design
2. Define a project outline
    1. Setup a new project in GitHub
    2. Create project outline 
        1. Break the Mock down into bit-sized chunks and build a mental model
        2. Define the tools we'll be using
            1. DB: SQLite3
            2. ORM: Prisma
            3. Language: Vite / Node.js / TypeScript
            4. Server: Express.js
            5. Testing: Jest
            6. Additional 3rd Party NPM Packages
                1. Dotenv - Securely Store API Credentials
                2. ESLint - Because i'm not dealing with you savages 
    3. Create a GitHub Repo, describe the workflow we'll be using
    4. Convert our first Github Project Task to a GitHub Issue.
        1. Break the project task down to small commit-sized tasks.
    5. Clone the repository
3. Milestone: Setup Environment 
4. Milestone: Setup the Express Server, push to Railway
5. Milestone: Setup the Database, push to Railway
6. Milestone: Setup the User Auth, push to Railway