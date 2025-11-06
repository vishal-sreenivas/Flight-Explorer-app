# Flight Explorer - Component API Reference

## Quick Component Usage Guide

### 1. **Navbar Component**
File: `src/components/Navbar.tsx`

```tsx
import Navbar from './components/Navbar'

<Navbar 
  onWatchlistClick={() => setActiveTab('watchlist')}
  onInfoClick={() => console.log('Show info')}
/>
```

**Props:**
- `onWatchlistClick?: () => void` - Callback when watchlist is clicked
- `onInfoClick?: () => void` - Callback when info button is clicked

---

### 2. **HeroSection Component**
File: `src/components/HeroSection.tsx`

```tsx
import HeroSection from './components/HeroSection'

<HeroSection 
  heading="One airline, endless destinations"
  subheading="Explore the world with us"
  backgroundImage="https://images.unsplash.com/..."
/>
```

**Props:**
- `heading?: string` - Main heading text
- `subheading?: string` - Subheading/description text
- `backgroundImage?: string` - Image URL for background

**Default Values:**
```tsx
heading = "One airline, endless destinations"
subheading = "Go beyond the ordinary, where every moment inspires"
backgroundImage = "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=1600&h=900&fit=crop"
```

---

### 3. **SearchBox Component**
File: `src/components/SearchBox.tsx`

```tsx
import SearchBox from './components/SearchBox'

<SearchBox 
  onSearch={(params) => handleSearch(params)}
  isLoading={isLoading}
/>
```

**Props:**
- `onSearch?: (params: any) => void` - Callback with search parameters
- `isLoading?: boolean` - Show loading state in button

**Search Parameters Returned:**
```tsx
{
  tripType: 'round-trip' | 'one-way' | 'multi-city',
  origin: string,           // Airport code (e.g., "CCU")
  destination: string,      // Airport code (e.g., "DEL")
  departDate: string,       // Format: "YYYY-MM-DD"
  returnDate?: string,      // Format: "YYYY-MM-DD" (optional)
  passengers: number        // 1-6
}
```

**Features:**
- ✅ Trip type tabs
- ✅ Swap airports button
- ✅ Date pickers
- ✅ Passenger counter
- ✅ Advanced options (cabin class)
- ✅ Rounded card design
- ✅ Gold accent colors

---

### 4. **FilterBar Component**
File: `src/components/FilterBar.tsx`

```tsx
import FilterBar from './components/FilterBar'

<FilterBar 
  onFilterChange={(filters) => {
    console.log('Filters:', filters)
    // TODO: Implement filter logic
  }}
/>
```

**Props:**
- `onFilterChange?: (filters: FilterOptions) => void` - Callback when filters change

**Filter Options:**
```tsx
interface FilterOptions {
  airline?: string          // e.g., "American", "Delta", "United"
  status?: string           // e.g., "On Time", "Delayed", "Cancelled"
  timeOfDay?: string        // e.g., "Morning", "Afternoon", "Evening"
  maxDelay?: number         // 0-120 minutes
}
```

**Available Options:**
- **Airlines**: American, Delta, United, Southwest, JetBlue, Frontier
- **Status**: On Time, Delayed, Cancelled, Boarding
- **Time of Day**: Early Morning, Morning, Afternoon, Evening, Night
- **Max Delay**: Slider 0-120 minutes

---

### 5. **Deals Component**
File: `src/components/Deals.tsx`

```tsx
import Deals from './components/Deals'

<Deals 
  deals={dealsArray}
  onViewAll={() => navigate('/deals')}
/>
```

**Props:**
- `deals?: Deal[]` - Array of deal objects
- `onViewAll?: () => void` - Callback for "View all" button

**Deal Object Structure:**
```tsx
interface Deal {
  id: string
  title: string              // e.g., "Deals from Mumbai"
  description: string        // e.g., "Let us inspire your next trip"
  price: string             // e.g., "From INR 44,167"
  image: string             // Image URL
}
```

**Default Deals:** If no deals prop provided, shows 3 default deals

---

### 6. **FlightCard Component**
File: `src/components/FlightCard.tsx`

```tsx
import FlightCard from './components/FlightCard'

<FlightCard
  flight={flightObject}
  onClick={() => handleFlightClick(flight.id)}
/>
```

**Props:**
- `flight: Flight` - Flight object to display
- `onClick?: () => void` - Callback when card is clicked

**Flight Object Structure:**
```tsx
interface Flight {
  id: string
  flightNumber: string       // e.g., "AA123"
  airline: string           // e.g., "American Airlines"
  origin: Airport           // Departure airport
  destination: Airport      // Arrival airport
  departure: FlightTime     // Departure details
  arrival: FlightTime       // Arrival details
  status: string            // e.g., "On Time", "Delayed"
  aircraft: string          // e.g., "Boeing 777"
  duration: string          // e.g., "4h 30m"
  delay?: number            // Delay in minutes
}

interface Airport {
  code: string              // e.g., "JFK"
  name: string
  city: string
}

interface FlightTime {
  scheduled: string         // ISO datetime
  actual?: string
  estimated?: string
  terminal?: string
  gate?: string
}
```

**Features:**
- ✅ Hover animations (scale + shadow)
- ✅ Status badges (green/yellow/red)
- ✅ Watchlist heart button
- ✅ Flight details on click
- ✅ Aircraft type display
- ✅ Duration and delay info

---

## Integration Examples

### **Complete Search Flow**
```tsx
import { useState } from 'react'
import HeroSection from './components/HeroSection'
import SearchBox from './components/SearchBox'
import FilterBar from './components/FilterBar'
import FlightCard from './components/FlightCard'
import { searchFlights } from './services/flightService'

export default function FlightSearch() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (params) => {
    setIsLoading(true)
    try {
      // Convert SearchBox params to FlightSearchParams
      const flightParams = {
        origin: params.origin,
        destination: params.destination,
        flightNumber: params.flightNumber
      }
      const flights = await searchFlights(flightParams)
      setResults(flights)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <HeroSection />
      <SearchBox onSearch={handleSearch} isLoading={isLoading} />
      <FilterBar onFilterChange={(filters) => {
        // TODO: Apply filters to results
      }} />
      <div className="grid grid-cols-3 gap-4">
        {results.map(flight => (
          <FlightCard 
            key={flight.id}
            flight={flight}
            onClick={() => console.log('Clicked:', flight.id)}
          />
        ))}
      </div>
    </div>
  )
}
```

---

## Styling & Customization

### **Color Customization**
Edit in components to change colors:

```tsx
// Change accent color from amber to another
className="bg-amber-500"  →  className="bg-blue-500"

// Change text color
className="text-slate-900"  →  className="text-gray-900"

// Change hover effects
className="hover:bg-amber-600"  →  className="hover:bg-blue-600"
```

### **Typography Customization**
```tsx
// Change heading size
className="text-5xl"  →  className="text-6xl"

// Change font weight
className="font-bold"  →  className="font-extrabold"

// Change text color
className="text-gray-800"  →  className="text-slate-900"
```

### **Spacing Customization**
```tsx
// Change padding
className="p-6"  →  className="p-8"

// Change gap between items
className="gap-4"  →  className="gap-6"

// Change margin
className="mb-6"  →  className="mb-8"
```

---

## Common Tasks

### **Modify Hero Background Image**
```tsx
<HeroSection 
  backgroundImage="https://your-image-url.com/image.jpg"
/>
```

### **Change Trip Types Available**
Edit `SearchBox.tsx`:
```tsx
{(['round-trip', 'one-way', 'multi-city'] as const).map((type) => (
  // Change array to customize
))}
```

### **Add New Filter Options**
Edit `FilterBar.tsx`:
```tsx
const airlines = ['All', 'Your', 'Airlines']  // Add new airlines
const statuses = ['All', 'Your', 'Statuses']  // Add new statuses
```

### **Customize Deal Cards**
```tsx
const defaultDeals = [
  {
    id: '1',
    title: 'Your Title',
    description: 'Your description',
    price: 'Your price',
    image: 'Your image URL'
  }
]
```

---

## Responsive Behavior

### **SearchBox Responsiveness**
```
Mobile (< 768px):     Vertical stacked layout
Tablet (768px-1024px): 2-column layout
Desktop (> 1024px):    5-column layout
```

### **FlightCard Grid**
```
Mobile:   grid-cols-1  (1 card per row)
Tablet:   grid-cols-2  (2 cards per row)
Desktop:  grid-cols-3  (3 cards per row)
```

### **Sidebar Behavior**
```
Mobile:   Collapsible toggle
Tablet:   Always visible, can toggle
Desktop:  Always visible (56px fixed width)
```

---

## Performance Tips

1. **Use React.memo() for FlightCard** to prevent re-renders
2. **Implement pagination** for large flight result sets
3. **Debounce filter changes** to reduce API calls
4. **Lazy load Deals images** for faster initial load
5. **Use image CDN** for background images

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Search box not showing | Check `ml-56` class on main container |
| Filters not applying | Implement filter logic in `handleSearch` |
| Cards not responsive | Verify grid column classes are correct |
| Animations not smooth | Enable GPU acceleration in browser |
| Sidebar missing on mobile | Check hamburger menu toggle is working |

---

**Last Updated**: November 2025
**Component Count**: 6 main components + context
**Total Lines of Code**: ~2000+ lines
