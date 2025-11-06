# Flight Explorer App - Etihad Airlines UI Redesign

## 📋 Project Overview

The Flight Explorer app has been completely redesigned to match the modern, professional aesthetic of Etihad Airlines while maintaining all existing functionality. The app features a responsive layout with a sidebar navigation, hero section, advanced search box, filtering system, and flight results display.

---

## 🎨 Design Features

### **1. Color Scheme**
- **Primary Brand Color**: Amber (#F59E0B) - Used for buttons, tabs, and active states
- **Dark Background**: Slate (#1E293B, #334155) - Professional, airline-themed
- **White/Light**: Clean backgrounds for cards and search box
- **Text Colors**: Slate-900 for main text, slate-600 for secondary text

### **2. Typography**
- **Headlines**: Bold, large font sizes (4xl-6xl for hero)
- **Body**: Medium weights, readable on all screen sizes
- **Buttons**: Medium to bold, with smooth transitions

### **3. Spacing & Layout**
- **Sidebar**: Fixed left navigation (56px width when open)
- **Container**: Centered max-width with responsive padding
- **Gaps**: Consistent spacing with Tailwind's standard gap values
- **Margins**: Balanced 12-24px margins for visual hierarchy

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Sidebar + top header navigation
│   ├── HeroSection.tsx         # Hero banner with background image
│   ├── SearchBox.tsx           # Advanced search with tabs & dropdowns
│   ├── FilterBar.tsx           # Filter panel for flights
│   ├── Deals.tsx               # Featured deals section
│   ├── FlightCard.tsx          # Individual flight card
│   ├── SearchForm.tsx          # Legacy search form (optional)
│   ├── FlightDetails.tsx       # Flight detail modal
│   ├── Watchlist.tsx           # Watchlist view
│   └── LoadingSpinner.tsx      # Loading animation
├── services/
│   └── flightService.ts        # API calls & search logic
├── context/
│   └── WatchlistContext.tsx    # Watchlist state management
├── types/
│   └── flight.ts               # TypeScript interfaces
├── App.tsx                     # Main app component (refactored)
├── main.tsx                    # App entry point
├── index.css                   # Tailwind + custom animations
└── vite.config.ts             # Vite configuration
```

---

## 🔧 Key Components

### **1. Navbar.tsx** (Sidebar Navigation)
```tsx
// Features:
// - Fixed left sidebar with collapsible menu
// - Navigation items: Book, Manage, Check-in, Flight Status, Plan, Offers, Loyalty, Help
// - Account dropdown with profile, bookings, settings
// - Language selector (IN - India)
// - Responsive toggle button on mobile
// - Hover effects with smooth animations
```

**Usage:**
```tsx
<Navbar 
  onWatchlistClick={() => setActiveTab('watchlist')}
  onInfoClick={() => console.log('Info')}
/>
```

---

### **2. HeroSection.tsx** (Hero Banner)
```tsx
// Features:
// - Large background image with overlay
// - Customizable heading and subheading
// - CTA text "Book now"
// - Carousel indicators (optional)
// - Responsive sizing (h-96 mobile, h-[500px] desktop)
```

**Usage:**
```tsx
<HeroSection 
  heading="One airline, endless destinations"
  subheading="Go beyond the ordinary, where every moment inspires"
  backgroundImage="url-to-image"
/>
```

---

### **3. SearchBox.tsx** (Advanced Search)
```tsx
// Features:
// - Trip type tabs: Round Trip, One-way, Multi-city
// - From/To airport inputs with swap button
// - Date pickers for departure/return
// - Passenger count selector
// - Cabin class options (Economy, Business, First)
// - Advanced options toggle
// - Gold accent buttons
// - Rounded card styling
```

**Usage:**
```tsx
<SearchBox 
  onSearch={(params) => handleSearch(params)}
  isLoading={isLoading}
/>
```

**Search Parameters:**
```tsx
interface SearchParams {
  tripType: 'round-trip' | 'one-way' | 'multi-city'
  origin: string           // e.g., "CCU"
  destination: string      // e.g., "DEL"
  departDate: string       // "YYYY-MM-DD"
  returnDate?: string      // Optional for round trip
  passengers: number       // 1-6
}
```

---

### **4. FilterBar.tsx** (Advanced Filtering)
```tsx
// Features:
// - Collapsible filter panel
// - Filter by Airline (American, Delta, United, Southwest, etc.)
// - Filter by Status (On Time, Delayed, Cancelled, Boarding)
// - Filter by Time of Day (Early Morning, Morning, Afternoon, Evening, Night)
// - Filter by Max Delay (0-120 minutes slider)
// - Active filter counter
// - Clear All button
// - Smooth animations
```

**Usage:**
```tsx
<FilterBar 
  onFilterChange={(filters) => {
    console.log('Applied filters:', filters)
    // Implement filter logic here
  }}
/>
```

---

### **5. Deals.tsx** (Featured Deals)
```tsx
// Features:
// - Grid layout with 3 deal cards (responsive)
// - Image with overlay on hover
// - Deal title, description, price
// - Staggered animation effect
// - Book button on each card
```

**Usage:**
```tsx
<Deals 
  deals={dealArray}
  onViewAll={() => navigate('/deals')}
/>
```

---

### **6. FlightCard.tsx** (Enhanced Flight Display)
```tsx
// Features:
// - White card with top accent bar
// - Flight number, airline, aircraft info
// - Departure/arrival times
// - Route with icons
// - Status badge (green/yellow/red)
// - Watchlist heart button
// - Hover animations (scale + shadow)
// - Click handler for details modal
```

**Usage:**
```tsx
<FlightCard
  flight={flightObject}
  onClick={() => handleFlightClick(flight.id)}
/>
```

---

## 🔌 Integration Points

### **Flight Search API**
File: `src/services/flightService.ts`

```tsx
// Existing function - still works
export async function searchFlights(params: FlightSearchParams): Promise<Flight[]> {
  // Returns array of Flight objects
  // Supports: origin, destination, flightNumber
}
```

**Connection Flow:**
1. User enters search in `SearchBox.tsx`
2. `onSearch` callback passes params to `App.tsx`
3. `handleSearch()` calls `searchFlights()` from API
4. Results displayed in flight grid with `FlightCard` components

---

### **Watchlist Management**
File: `src/context/WatchlistContext.tsx`

```tsx
// Existing context - unchanged
const { watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist()

// Used in FlightCard for heart icon
```

---

## 📱 Responsive Design

### **Breakpoints:**
- **Mobile**: `< 768px` - Single column, full-width search box
- **Tablet**: `768px - 1024px` - 2 columns for flight cards
- **Desktop**: `> 1024px` - 3 columns, full sidebar visible

### **Sidebar Behavior:**
- Desktop: Always visible (56px width)
- Mobile: Collapsible menu toggle

### **Search Box:**
- Mobile: Stacked inputs vertically
- Desktop: Horizontal layout with swap button

---

## 🎯 Feature Roadmap

### **Implemented:**
✅ Sidebar navigation with collapsible menu
✅ Hero section with background image
✅ Advanced search box with trip types
✅ Filter bar for airlines, status, time, delays
✅ Flight card grid with hover effects
✅ Watchlist integration
✅ Smooth animations and transitions
✅ Responsive design (mobile & desktop)
✅ Dark theme with gold accents

### **Future Enhancements:**
- [ ] Multiple date pickers with date range
- [ ] Real-time price comparison
- [ ] Flight price alerts
- [ ] Seat selection interface
- [ ] Booking confirmation flow
- [ ] Payment integration
- [ ] User account management
- [ ] Push notifications for deals
- [ ] Dark/light theme toggle
- [ ] Multi-language support

---

## 🚀 Running the App

### **Development:**
```bash
cd /path/to/project
npm install
npm run dev
# App runs on http://localhost:5175
```

### **Build:**
```bash
npm run build
npm run preview
```

---

## 📊 Component Hierarchy

```
App.tsx
├── WatchlistProvider (Context)
└── AppContent
    ├── Navbar (Sidebar + Header)
    │   └── Sidebar Items + Account Dropdown
    ├── (Search Tab)
    │   ├── HeroSection
    │   ├── SearchBox
    │   │   ├── Trip Type Tabs
    │   │   ├── Airport Inputs
    │   │   ├── Date Pickers
    │   │   └── Advanced Options
    │   ├── FilterBar
    │   │   ├── Airline Filter
    │   │   ├── Status Filter
    │   │   ├── Time Filter
    │   │   └── Delay Filter
    │   ├── Deals (Initial State)
    │   └── Flight Grid
    │       └── FlightCard (×3)
    └── (Watchlist Tab)
        └── Watchlist Component
```

---

## 🎨 CSS & Animations

### **Custom Animations** (in `index.css`):
- `slideInUp` - Elements slide up on appear
- `slideInDown` - Elements slide down on appear
- `scaleIn` - Cards scale from 95% to 100%
- `fadeIn` - Smooth opacity transition
- `pulse` - Loading indicator pulse

### **Tailwind Classes Used:**
- Color: `amber-500`, `slate-800`, `text-white`
- Spacing: `px-4`, `py-8`, `gap-4`, `mb-6`
- Effects: `shadow-lg`, `rounded-lg`, `hover:scale-105`
- Flex: `flex`, `gap-4`, `items-center`, `justify-between`
- Grid: `grid`, `grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-3`

---

## ⚡ Performance Optimization

1. **Code Splitting**: Components are modular and lazily loaded
2. **Image Optimization**: Use Unsplash URLs with proper sizing
3. **Animation Performance**: CSS transforms instead of layout changes
4. **State Management**: Minimal re-renders with proper React hooks

---

## 🔐 Data Flow

```
User Input (SearchBox)
    ↓
handleSearch() in App.tsx
    ↓
searchFlights() API call (flightService.ts)
    ↓
setSearchResults() - Update state
    ↓
Render FlightCard Grid
    ↓
User clicks card
    ↓
handleFlightClick() - Set selectedFlight
    ↓
Show FlightDetails modal
```

---

## 🐛 Troubleshooting

### **Issue**: Sidebar not showing
**Solution**: Check that `ml-56` class is applied to main content area

### **Issue**: Search results not displaying
**Solution**: Verify `flightService.ts` API endpoint is working

### **Issue**: Animations not smooth
**Solution**: Check browser GPU acceleration is enabled

### **Issue**: Mobile layout broken
**Solution**: Verify Tailwind responsive classes (`md:`, `lg:`) are correct

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [Etihad Airlines](https://www.etihad.ae) - Design reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📄 License

This project is part of the Christ University MCA program.

---

**Last Updated**: November 2025
**Version**: 2.0 (Etihad Airlines Redesign)
