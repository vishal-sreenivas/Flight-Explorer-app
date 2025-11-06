[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/V6CCMHDl)

# ✈️ Flight Explorer App

A professional, feature-rich flight booking application built with React and TypeScript, inspired by Etihad Airways design. Allows users to search flights by airports, airlines, view real-time flight status, and manage a watchlist of favorite flights.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Features Implemented](#features-implemented)
3. [Setup Instructions](#setup-instructions)
4. [Testing Instructions](#testing-instructions)
5. [API Setup](#api-setup)
6. [Project Structure](#project-structure)
7. [Assumptions & Decisions](#assumptions--decisions)
8. [Available Scripts](#available-scripts)
9. [Technology Stack](#technology-stack)

---

## 🎯 Project Overview

**Flight Explorer** is a modern web application that enables users to search for flights, view real-time flight status, and manage their favorite flights through an intuitive interface. The application features:

- **Smart Search**: Search flights by airport code/name and airline code
- **Real-Time Flight Status**: View live flight status with departure/arrival times
- **Watchlist Management**: Save favorite flights to localStorage
- **Dark/Light Theme**: Toggle between professional dark mode (default) and light mode with blue gradient
- **Professional UI**: Etihad Airways-inspired design with smooth animations
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Advanced Filtering**: Filter flights by origin, destination, and airline

**Target Users**: 
- Business travelers
- Leisure travelers
- Travel agencies
- Flight booking platforms

---

## ✨ Features Implemented

### 1. **Flight Search System**
- ✅ **Smart Airport Autocomplete**: Real-time suggestions by airport code or city name
- ✅ **Airline Search**: Filter flights by airline code (e.g., EY, AA, BA)
- ✅ **Trip Type Selection**: Round-trip, One-way, and Multi-city options
- ✅ **Airport Swap**: Quick button to swap origin and destination
- ✅ **Debounced Search**: 300ms debounce on API calls for optimal performance

### 2. **Flight Status Tracking**
- ✅ **Real-Time Data Table**: Displays flight number, airline, route, departure/arrival times
- ✅ **Status Color Coding**: 
  - 🟢 Green: On Time
  - 🟡 Yellow: Delayed
  - 🔴 Red: Cancelled
  - 🔵 Blue: Boarding
- ✅ **Search & Filter**: Filter status table by flight number, airline, or airport codes
- ✅ **Manual Refresh**: Refresh button to update flight data
- ✅ **Result Counter**: Shows "Showing X of Y flights"

### 3. **Watchlist/Favorites System**
- ✅ **Add to Watchlist**: Heart icon on flight cards to save favorites
- ✅ **localStorage Persistence**: Favorites saved across browser sessions
- ✅ **Dedicated View**: Separate watchlist page to view all saved flights
- ✅ **Remove from Watchlist**: One-click removal of saved flights
- ✅ **Clear All**: Option to clear entire watchlist

### 4. **Theme System**
- ✅ **Dark Mode** (Default): Slate-900 background with white text
- ✅ **Light Mode**: Blue gradient background (#BDDDFC to #88BDF2)
- ✅ **Theme Toggle**: Sun/Moon icon in navbar header
- ✅ **localStorage Persistence**: Theme preference saved across sessions
- ✅ **Consistent Styling**: Amber accent color (#f59e0b) across both themes

### 5. **Calendar Feature**
- ✅ **Date Picker Modal**: Interactive calendar for date selection
- ✅ **Month Navigation**: Previous/Next month controls
- ✅ **Keyboard Support**: Arrow keys for date navigation
- ✅ **Visual Selection**: Highlighted selected date

### 6. **Navigation & Layout**
- ✅ **Fixed Sidebar**: Sticky left sidebar with 4 menu items
  - Book (Search flights)
  - Calendar (Date picker)
  - Flight status (Status tracking)
  - Watchlist (Favorites)
- ✅ **Responsive Design**: Adapts to mobile, tablet, desktop
- ✅ **Logo Navigation**: Click logo to return to home page
- ✅ **Professional Header**: Fixed top navigation bar

### 7. **UI/UX Features**
- ✅ **Smooth Animations**: CSS keyframe animations for transitions
  - slideInUp, slideInDown, scaleIn, fadeIn, pulse
- ✅ **Loading States**: Spinner component during data fetching
- ✅ **Error Handling**: User-friendly error messages
- ✅ **Empty States**: Proper messaging for no results
- ✅ **Hover Effects**: Interactive feedback on buttons and cards
- ✅ **Flight Cards**: Grid layout with staggered animation

### 8. **Data Management**
- ✅ **API Integration**: Fetches data from Flight Explorer API
- ✅ **Fallback Data**: Default airlines and airports if API unavailable
- ✅ **Error Recovery**: Graceful fallback to default data
- ✅ **Data Extraction**: Dynamically extracts unique airports and airlines

---

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/christ-university-mca-vishal-sreenivas.git
   cd christ-university-mca-vishal-sreenivas
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5176` (or port shown in terminal)
   - The app will hot-reload when you make changes

5. **Verify Setup:**
   - See the hero section with "Flight Explorer" title
   - Try searching for flights using airport codes
   - Check that theme toggle works (sun/moon icon)
   - Verify sidebar navigation

### Build for Production

```bash
npm run build
```

Preview the build locally:
```bash
npm run preview
```

---

## 🧪 Testing Instructions

### Running Tests

1. **Run all tests:**
   ```bash
   npm test
   ```

2. **Run tests with UI:**
   ```bash
   npm run test:ui
   ```

3. **Generate coverage report:**
   ```bash
   npm run test:coverage
   ```

### Manual Testing Checklist

#### Search Functionality
- [ ] Type airport code (e.g., "DEL") in From field → autocomplete suggestions appear
- [ ] Select an airport from dropdown
- [ ] Swap airports using the exchange button
- [ ] Type airline code (e.g., "EY") in Airline field
- [ ] Click Search button → flights load in grid

#### Flight Status
- [ ] Click "Flight status" in sidebar
- [ ] Flight data table appears with all flights
- [ ] Search by flight number (e.g., "AA-101")
- [ ] Status badges show correct colors
- [ ] Click refresh button → data updates
- [ ] Result counter shows correct count

#### Watchlist
- [ ] Click heart icon on flight card → added to watchlist
- [ ] Click "Watchlist" in sidebar → see saved flights
- [ ] Click heart again → remove from watchlist
- [ ] Refresh page → watchlist persists
- [ ] Clear all → empty watchlist

#### Theme System
- [ ] Click sun/moon icon in header → theme toggles
- [ ] In dark mode: background is slate-900, text is white
- [ ] In light mode: gradient blue background
- [ ] Refresh page → theme persists
- [ ] Input fields remain consistent in both themes

#### Navigation
- [ ] Click logo → returns to home page
- [ ] Click each sidebar item → correct view appears
- [ ] Mobile view → sidebar collapses properly
- [ ] Scroll → navbar stays fixed at top

#### Error Handling
- [ ] Close API → fallback to default airports and airlines appears
- [ ] Error message displays if search fails
- [ ] No results message appears for invalid search

---

## 🔌 API Setup

### API Endpoint

The application uses the **Flight Explorer API**:

```
Base URL: https://flight-explorer-api.codewalnut.com/api
```

### API Endpoints Used

#### 1. **Get All Flights**
```
GET https://flight-explorer-api.codewalnut.com/api/flights
```

**Response:**
```json
{
  "flights": [
    {
      "id": "f1",
      "flightNumber": "AA-101",
      "airline": "American Airlines",
      "origin": {
        "code": "JFK",
        "name": "John F. Kennedy",
        "city": "New York"
      },
      "destination": {
        "code": "BOM",
        "name": "Bombay",
        "city": "Mumbai"
      },
      "departure": {
        "scheduled": "2025-11-15T14:30:00Z",
        "actual": "2025-11-15T14:35:00Z",
        "terminal": "1",
        "gate": "A5"
      },
      "arrival": {
        "scheduled": "2025-11-16T04:45:00Z",
        "estimated": "2025-11-16T04:50:00Z",
        "terminal": "2"
      },
      "status": "On Time",
      "aircraft": "Boeing 777-300ER",
      "duration": "16h 15m"
    }
  ]
}
```

### API Features

- **Real-time Data**: Updates on each fetch
- **Comprehensive Flight Info**: Full departure/arrival details
- **Status Tracking**: Current flight status
- **Aircraft Info**: Aircraft type
- **Terminal Info**: Gate and terminal information

### Error Handling

If API fails:
- Fallback to default airlines (EY, AA, BA, AI, LH, AF, KL, SQ, QF, UA)
- Fallback to default airports (DEL, BOM, DXB, LHR, JFK, CDG, etc.)
- Error messages displayed to user
- App remains functional with cached/default data

---

## 📁 Project Structure

```
christ-university-mca-vishal-sreenivas/
├── src/
│   ├── components/
│   │   ├── AirlineAutocomplete.tsx      # Airline selection dropdown
│   │   ├── AirportAutocomplete.tsx      # Airport search autocomplete
│   │   ├── Calendar.tsx                 # Date picker modal
│   │   ├── Deals.tsx                    # Featured deals section
│   │   ├── FilterBar.tsx                # Flight filtering
│   │   ├── FlightCard.tsx               # Individual flight card
│   │   ├── FlightDetails.tsx            # Detailed flight modal
│   │   ├── FlightStatus.tsx             # Real-time status table
│   │   ├── HeroSection.tsx              # Landing hero banner
│   │   ├── LoadingSpinner.tsx           # Loading indicator
│   │   ├── Navbar.tsx                   # Sidebar + header navigation
│   │   ├── SearchBox.tsx                # Main search form
│   │   ├── SearchForm.tsx               # Alternative search form
│   │   ├── Watchlist.tsx                # Favorites view
│   │   └── __tests__/                   # Component tests
│   ├── context/
│   │   ├── ThemeContext.tsx             # Theme type definitions
│   │   ├── ThemeProvider.tsx            # Dark/light theme provider
│   │   ├── WatchlistContext.tsx         # Watchlist state manager
│   │   └── __tests__/
│   ├── services/
│   │   └── flightService.ts             # Flight API integration
│   ├── types/
│   │   └── flight.ts                    # Flight TypeScript types
│   ├── data/
│   │   └── airports.ts                  # Default airport data
│   ├── test/
│   │   └── setup.ts                     # Test configuration
│   ├── App.tsx                          # Main app component
│   ├── index.css                        # Global styles + animations
│   └── main.tsx                         # React entry point
├── public/
│   └── (static assets)
├── package.json                         # Dependencies
├── tsconfig.json                        # TypeScript config
├── vite.config.ts                       # Vite bundler config
├── tailwind.config.js                   # Tailwind CSS config
├── postcss.config.js                    # PostCSS config
└── README.md                            # This file
```

---

## 💡 Assumptions & Decisions

### Architectural Decisions

1. **Vite instead of Create React App**
   - **Decision**: Use Vite 5.4.21 for faster build and development
   - **Reasoning**: Faster HMR, smaller bundle, modern tooling
   - **Assumption**: Modern browsers with ES2020+ support

2. **Context API for State Management**
   - **Decision**: Use React Context for theme and watchlist
   - **Reasoning**: No need for Redux; Context sufficient for current scope
   - **Assumption**: Scalable to ~100-200 flights without performance issues

3. **localStorage for Persistence**
   - **Decision**: Use browser localStorage for watchlist and theme
   - **Reasoning**: Simple, no backend required, per user preference
   - **Assumption**: User accepts privacy of browser storage

4. **Tailwind CSS for Styling**
   - **Decision**: Utility-first CSS framework for rapid UI development
   - **Reasoning**: Consistent design, easy theming, responsive utilities
   - **Assumption**: Bundle size increase acceptable for feature speed

### Data Handling Decisions

1. **Airport/Airline Extraction**
   - **Decision**: Dynamically extract unique airports and airlines from API data
   - **Reasoning**: Keeps data source of truth with API, no hard-coded lists
   - **Fallback**: Default list if API unavailable
   - **Assumption**: API contains diverse enough data for good UX

2. **Debounced Search**
   - **Decision**: 300ms debounce on autocomplete inputs
   - **Reasoning**: Reduces API calls, improves performance
   - **Assumption**: Acceptable 300ms delay for user experience

3. **Client-Side Filtering**
   - **Decision**: Fetch all flights once, filter on client
   - **Reasoning**: Simpler implementation, API doesn't support filtering
   - **Assumption**: API returns manageable dataset (~100-200 flights)

### UX Decisions

1. **Dark Mode as Default**
   - **Decision**: Dark theme set as default
   - **Reasoning**: Popular in modern apps, reduces eye strain
   - **Assumption**: Aligns with Etihad Airways brand direction

2. **Amber Accent Color**
   - **Decision**: #f59e0b amber for all focus states and CTAs
   - **Reasoning**: Consistent branding, good contrast in both themes
   - **Assumption**: Accessible color for all users (WCAG AA+)

3. **Sidebar Navigation**
   - **Decision**: Fixed 56px left sidebar with 4 main items
   - **Reasoning**: Common airline app pattern, easy navigation
   - **Assumption**: Desktop-first design with mobile fallbacks

4. **Tab-Based Views**
   - **Decision**: Switch between Search/Watchlist/Flight Status via tabs
   - **Reasoning**: Clear content separation, no page reloads
   - **Assumption**: Users understand tab paradigm

### Technical Decisions

1. **TypeScript Strict Mode**
   - **Decision**: Enable strict TypeScript checking
   - **Reasoning**: Type safety, catches bugs early
   - **Assumption**: Team familiar with TypeScript

2. **Component-Based Architecture**
   - **Decision**: Small, focused components with single responsibility
   - **Reasoning**: Reusability, testability, maintainability
   - **Assumption**: React best practices followed throughout

3. **CSS Animations**
   - **Decision**: Pure CSS keyframe animations (no JavaScript libraries)
   - **Reasoning**: Better performance, smaller bundle
   - **Assumption**: 60fps performance on modern browsers

### Fallback Strategies

1. **API Unavailable**
   - Falls back to 10 default popular airlines
   - Falls back to 12 default popular airports
   - Shows error message to user
   - App remains functional

2. **No Search Results**
   - Displays "No flights found" message
   - Shows featured deals instead
   - Suggests trying different search parameters

3. **Missing Flight Data**
   - Gracefully handles missing optional fields
   - Shows "N/A" for unavailable data
   - Doesn't crash application

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode.
- Starts dev server at http://localhost:5176
- Hot reloads on file changes
- Shows compilation errors in terminal

### `npm run build`
Builds the app for production.
- Optimizes and minifies code
- Outputs to `dist/` directory
- Ready for deployment

### `npm run preview`
Previews the production build locally.
- Serves the built app at http://localhost:4173
- Tests production bundle

### `npm test`
Runs tests with Vitest.
- Watches for file changes
- Re-runs affected tests

### `npm run test:ui`
Runs tests with interactive UI.
- Browser-based test runner
- Visual test results

### `npm run test:coverage`
Generates test coverage report.
- Shows % coverage by file
- Identifies untested code

---

## 🛠️ Technology Stack

### Core Technologies
- **React** 18.2.0 - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** 5.4.21 - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **React Context API** - Global state (theme, watchlist)
- **React Hooks** - Local component state
- **localStorage** - Browser persistence

### UI Components & Icons
- **React Icons** 5.3.0 - Icon library
  - FontAwesome, Feather, and more

### Development Tools
- **Vitest** - Unit testing framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting (configured)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript support required
- Responsive design: 320px - 1920px+

---

## 📝 Notes

### Performance Optimization
- Debounced autocomplete (300ms)
- Memoized components where applicable
- CSS animations use `transform` and `opacity` for 60fps
- Lazy loading ready (can be added)

### Accessibility
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast in both light and dark modes
- Focus indicators on all interactive elements

### Future Enhancements
- [ ] Backend API with database
- [ ] User authentication and profiles
- [ ] Booking system with payment integration
- [ ] Real-time WebSocket updates
- [ ] Email notifications for flight changes
- [ ] Export flight data to PDF
- [ ] Comparison tool for multiple flights
- [ ] Filter by price, duration, stops
- [ ] Reviews and ratings for flights
- [ ] Multi-language support (i18n)

---

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is part of Christ University MCA curriculum assignment.

---

## 👤 Author

**Vishal Sreenivas**
- GitHub: [@your-github-username](https://github.com/your-username)
- Institution: Christ University, MCA Program

---

## 📞 Support

For issues, questions, or suggestions:
1. Open an issue on GitHub
2. Contact the development team
3. Check existing documentation

---

**Last Updated**: November 3, 2025
**Status**: ✅ Complete and Tested

│   │   └── flight.ts        # Flight-related type definitions
│   ├── test/                # Test utilities
│   │   └── setup.ts         # Vitest setup
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md
```

### Features Implemented

✅ **Flight Search Form**
- Search by origin/destination airports OR flight number
- Form validation with error messages
- Toggle between search modes

✅ **Flight Results Display**
- Responsive card layout
- Shows airline, flight number, departure/arrival times
- Color-coded status badges (On Time: green, Delayed: yellow, Cancelled: red)
- Aircraft type and duration information

✅ **Flight Details View**
- Detailed modal view on flight card click
- Complete route information
- Terminal and gate details
- Delay information

✅ **Watchlist Feature**
- Add/remove flights to/from watchlist
- localStorage persistence
- Separate watchlist section
- Clear all functionality

✅ **UI/UX**
- Professional Tailwind CSS styling
- Responsive design (mobile + desktop)
- Loading states
- Empty states
- Error handling

✅ **Testing**
- Unit tests for SearchForm component
- Unit tests for WatchlistContext
- Unit tests for FlightCard component

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### API Integration

The app integrates with the Flight Explorer API:
- **Base URL:** `https://flight-explorer-api.codewalnut.com/api`
- **Endpoint:** `GET /api/flights`
- **No authentication required**

The API service is implemented in `src/services/flightService.ts` with proper error handling.

### Technologies Used

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Vitest** for testing
- **React Icons** for icons
- **dayjs** for date formatting
- **localStorage** for watchlist persistence

---

## Objective

Build a Flight Explorer application that allows users to search for flights, view detailed flight information, and maintain a personal watchlist of flights they want to track. This assignment tests your ability to work with React (recommended with TypeScript), Tailwind CSS, state management, API integration, localStorage persistence, and testing with Vitest.

---

## Tech Stack

### Required Technologies:

- **React (v18+)** with Vite
- **Tailwind CSS** for styling
- **React Hooks** for state management (useState, useEffect, useContext, or useReducer)
- **Vitest** for unit/integration testing
- **localStorage** for watchlist persistence
- **Flight API** as provided OR use provided mock JSON data

### Optional Libraries:

- `axios` or `fetch` for API calls
- `react-icons` for icons
- `dayjs` for date formatting

---

## Commit Message Standards

Follow conventional commit message format. Each commit should be prefixed with one of the following:

- `feat:` \- A new feature (e.g., `feat: add flight search form`)
- `fix:` \- A bug fix (e.g., `fix: resolve watchlist duplicate entries`)
- `refactor:` \- Code refactoring without changing functionality (e.g., `refactor: extract FlightCard component`)
- `test:` \- Adding or updating tests (e.g., `test: add unit tests for watchlist`)
- `style:` \- Styling changes (e.g., `style: update flight card layout`)
- `docs:` \- Documentation updates (e.g., `docs: update README with setup instructions`)

### Examples:

```
feat: implement flight search with API integration
fix: correct date display for UTC timestamps
test: add tests for localStorage watchlist persistence
```

---

## Flight API Details

We have provided a Flight Data API for this assignment. You can use this API or fall back to mock JSON data.

### API Base URL:

```
https://flight-explorer-api.codewalnut.com/
```

### Available Endpoints:

- **GET /api/flights** \- Returns 100 flight records with complete flight information

### API Documentation:

You can explore the API interactively at: [https://flight-explorer-api.codewalnut.com/docs](https://flight-explorer-api.codewalnut.com/docs)

**Steps to test:**

1. Visit the `/docs` endpoint
2. Click on the `GET /api/flights` endpoint
3. Click **"Try it out"**
4. Click **"Execute"** to see the response structure

### Authentication:

**No Authentication Required** \- This API is open and does not require an API key for this assignment.

### Response Format:

The API returns a JSON object with a `"flights"` array containing flight objects (see Mock Data Structure below for the exact format).

---

## Mock Data Structure Example

```json
{
  "flights": [
    {
      "id": "AA123-20241031",
      "flightNumber": "AA123",
      "airline": "American Airlines",
      "origin": {
        "code": "JFK",
        "name": "John F. Kennedy International",
        "city": "New York"
      },
      "destination": {
        "code": "LAX",
        "name": "Los Angeles International",
        "city": "Los Angeles"
      },
      "departure": {
        "scheduled": "2024-10-31T08:00:00Z",
        "actual": "2024-10-31T08:15:00Z",
        "terminal": "8",
        "gate": "23"
      },
      "arrival": {
        "scheduled": "2024-10-31T11:30:00Z",
        "estimated": "2024-10-31T11:45:00Z",
        "terminal": "4",
        "gate": "42"
      },
      "status": "Delayed",
      "aircraft": "Boeing 737-800",
      "duration": "5h 30m",
      "delay": 15
    }
  ]
}
```

---

## Evaluation Criteria

Your submission will be evaluated based on:

### 1\. Code Quality

- Clean, readable, and well-organized code
- Proper component structure and reusability
- Appropriate use of React hooks
- Separation of concerns (components, services, utilities)
- No console errors or warnings

### 2\. Functionality

- All core features work as expected
- Proper error handling and edge cases
- Form validation works correctly
- Watchlist persists across sessions
- Search returns relevant results

### 3\. UI/UX

- Professional and clean design
- Responsive layout (mobile and desktop)
- Proper loading, error, and empty states
- Intuitive user interface
- Consistent styling with Tailwind

### 4\. Testing

- Tests run successfully
- Adequate test coverage for core functionality
- Tests are meaningful and well-written

### 5\. Best Practices

- Meaningful commit messages following conventions
- Proper README documentation
- No hardcoded sensitive data (API keys should be in .env)
- Proper .gitignore file
- Raise a Pull Request (Good to have)
- Minimal prop drilling

**Note:** Marks will be awarded based on the evaluation criteria and feature breakdown.

---

## Feature Breakdown with Marks

**Total marks: 100**

| Slno | Feature                       | Description                                                                                                                               | Marks   |
| :--- | :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| 1    | **Project Setup**             | Proper Vite \+ React \+ Tailwind setup, clean folder structure, README with setup instructions                                            | 10      |
| 2    | **Flight Search Form**        | Search form with origin/destination airports OR flight number input. Proper form validation and error handling                            | 15      |
| 3    | **Flight Results Display**    | Display search results in a clean, responsive card layout showing: airline, flight number, departure/arrival times, status, aircraft type | 20      |
| 4    | **Flight Details View**       | Click on a flight to view detailed information (route, terminal, gate, delays, etc.)                                                      | 15      |
| 5    | **Watchlist Feature**         | Add/remove flights to/from watchlist with localStorage persistence. Display watchlist in a separate section                               | 20      |
| 6    | **UI/UX & Responsive Design** | Professional UI using Tailwind, responsive design (mobile \+ desktop), loading states, empty states, error states                         | 10      |
| 7    | **Testing with Vitest**       | Unit tests for key components (search form, watchlist functionality, localStorage). Minimum 3 test suites                                 | 10      |
|      | **TOTAL**                     |                                                                                                                                           | **100** |

---

## Bonus Points

These are optional enhancements. You can earn up to **20 additional marks**:

| Bonus Feature                | Description                                                                     | Marks    |
| :--------------------------- | :------------------------------------------------------------------------------ | :------- |
| **Airport Autocomplete**     | Implement autocomplete/dropdown for airport codes (IATA) with airport names     | \+5      |
| **Flight Status Indicators** | Color-coded badges (On Time: green, Delayed: yellow, Cancelled: red) with icons | \+3      |
| **Advanced Filters**         | Filter results by airline, status, or time of day                               | \+3      |
| **Dark Mode Toggle**         | Implement dark/light theme toggle with localStorage persistence                 | \+5      |
| **Animation & Transitions**  | Smooth animations for list entries, modal transitions, loading skeletons        | \+4      |
|                              | **TOTAL BONUS**                                                                 | **\+20** |

**Note:** Bonus marks can bring your total above 100, but the primary focus should be on completing the core features first.

---

## Deliverables

Submit your assignment by providing:

### 1\. GitHub Classroom Repository Link

- Submit a Google Form with your GitHub Classroom repository URL.
- Include a comprehensive `README.md`
- Commit history showing your development process
- `.env.example` file (if using API keys)

### 2\. Deployed App Link (Optional but recommended)

- Deploy to Vercel, Netlify, or GitHub Pages
- Provide the live URL in your README

### 3\. README Must Include:

- Project overview
- Features implemented
- Setup instructions
- Testing instructions
- API setup (if applicable)
- Any assumptions or decisions made

---

## Time Constraint

**Total Time: 4 hours maximum**

### Important Notes:

- Focus on completing core features first before attempting bonuses
- It's better to have a working app with fewer features than an incomplete app with many features
- Submit even if you don't complete everything. We value quality over quantity.

---

## Contact

If you have any questions or encounter technical issues with the assignment, please reach out to:

**Email:**

- [likitha@codewalnut.com](mailto:likitha@codewalnut.com)
- [vishnu@codewalnut.com](mailto:vishnu@codewalnut.com)
- [kavaskar@codewalnut.com](mailto:kavaskar@codewalnut.com)
- [shansundar@codewalnut.com](mailto:shansundar@codewalnut.com)

---

## Common Questions

**Q: Can I use external libraries?**  
A: Yes, but keep it minimal and document your choices.

**Q: What if the API is down?**  
A: Use mock data as a fallback.

**Q: Can I use TypeScript?**  
A: Yes, highly recommended\!

**Q: Should I write E2E tests?**  
A: Unit/integration tests are sufficient.

---

## Good luck\! We're excited to see what you build\! 🚀
