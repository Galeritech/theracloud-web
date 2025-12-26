# TheraCloud Web

A modern Next.js web application for TheraCloud, consuming data from a GraphQL API.

## 🚀 Features

- **Next.js 16** - Latest version with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GraphQL** - Apollo Client for API consumption
- **Testing** - Jest and React Testing Library
- **Code Coverage** - Comprehensive test coverage reporting
- **Linting** - ESLint with best practices
- **Docker** - Production and development containers
- **CI/CD** - GitHub Actions with automated testing and branch protection
- **Pre-commit Hooks** - Husky with commitlint for conventional commits

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Docker and Docker Compose (optional, for containerized development)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/galeritech/theracloud-web.git
cd theracloud-web
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp docker-compose.env.sample docker-compose.env
# Edit docker-compose.env with your configuration
```

## 🏃 Development

### Local Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Docker Development

Start the development container:

```bash
docker-compose up web
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## 🐳 Docker

### Development

```bash
docker-compose up web
```

### Production

```bash
docker-compose --profile production up web-prod
```

Or build and run manually:

```bash
docker build -f Dockerfile -t theracloud-web:latest .
docker run -p 3000:3000 theracloud-web:latest
```

## 🧪 Testing

Run tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory.

## 📝 Code Quality

### Linting

The project uses ESLint with Next.js recommended configurations and TypeScript support.

```bash
npm run lint
npm run lint:fix
```

### Commit Messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages must follow this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Other changes

Example:

```
feat(auth): add user login functionality

Implement login form with email and password validation.
Add error handling for invalid credentials.

Closes #123
```

Pre-commit hooks will automatically validate commit messages and run linting before pushing.

## 🔄 Git Workflow

### Branch Strategy

- `main` - Production branch (protected)
- `develop` - Development branch (protected)

### Pull Request Rules

#### PRs to `develop`:

- Must pass lint, tests, and coverage checks
- Requires at least 1 approval
- Branch is automatically deleted after merge
- Only `develop` branch is kept

#### PRs to `main`:

- Must start with `release/` prefix (e.g., `release/v1.0.0`)
- Must pass lint, tests, and coverage checks
- Requires at least 1 approval
- Branch is automatically deleted after merge
- Only `main` branch is kept

### Creating a PR

1. Create a feature branch:

```bash
git checkout -b feature/my-feature
```

2. Make your changes and commit:

```bash
git add .
git commit -m "feat: add new feature"
```

3. Push and create a PR:

```bash
git push origin feature/my-feature
```

4. Create a PR to `develop` branch on GitHub

### Creating a Release PR

1. Create a release branch:

```bash
git checkout -b release/v1.0.0
```

2. Make release changes and commit:

```bash
git add .
git commit -m "chore(release): prepare v1.0.0"
```

3. Push and create a PR:

```bash
git push origin release/v1.0.0
```

4. Create a PR to `main` branch on GitHub

## 🔐 Environment Variables

Create a `docker-compose.env` file (use `docker-compose.env.sample` as a template):

```env
# GraphQL API Configuration
NEXT_PUBLIC_GRAPHQL_API_URL=http://localhost:4000/graphql
GRAPHQL_API_URL=http://localhost:4000/graphql

# Environment
NODE_ENV=development

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📦 GraphQL Integration

This application uses Apollo Client for GraphQL API consumption. Configure your GraphQL endpoint in the environment variables.

Example usage:

```typescript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});
```

## 🏗️ Project Structure

```
theracloud-web/
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                 # Utility functions
├── public/              # Static assets
├── .github/             # GitHub Actions workflows
├── .husky/              # Git hooks
├── Dockerfile           # Production Docker image
├── Dockerfile.dev       # Development Docker image
├── docker-compose.yml   # Docker Compose configuration
└── jest.config.js       # Jest configuration
```

## 🚢 CI/CD

GitHub Actions workflows are configured for:

1. **CI Pipeline** (`ci.yml`):
   - Runs on PRs to `develop` and `main`
   - Lint checks
   - Test execution with coverage
   - Build verification
   - PR approval checks

2. **Branch Cleanup** (`cleanup-branches.yml`):
   - Automatically deletes merged branches
   - Keeps only `develop` and `main` branches

3. **Branch Protection** (`branch-protection.yml`):
   - Prevents broken PRs from being merged
   - Enforces PR requirements

## 📊 Code Coverage

The project maintains a minimum coverage threshold:

- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

Coverage reports are generated in the `coverage/` directory and uploaded to Codecov in CI.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Team

GaleriTech

## 📞 Support

For support, please open an issue in the GitHub repository.
