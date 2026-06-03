# 📱 MediFinder – Mobile Engineer Case Study

A clean and scalable React Native application that demonstrates a provider discovery flow with filtering, search, and detail navigation.

![MediFinder](./assets/MediFinder.png)

---
🎥 Demo
<p align="center">
  <img src="assets/screenrecording.gif" width="300" alt="MediFinder Demo" />
</p>
---

## 🚀 Overview

This project implements a simplified provider discovery experience with three main screens:

- Provider List
- Filter Modal
- Provider Detail

The main goal is to demonstrate:
- Clean and scalable architecture
- Component reusability
- State management approach
- UX handling (loading, empty states)
- Maintainable code structure

---

## 🧱 Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation
- Functional components + Hooks
- Mock data (no backend)

---

## 📂 Project Structure

Feature-based architecture is used for scalability and separation of concerns.

```text
src/
├── features/
│   ├── providers/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── services/mock/
│   ├── filters/
│   └── shared/
│       ├── components/
│       ├── constants/
│       ├── hooks/
│       ├── utils/
│       └── types/
├── navigation/
```


### Design Decisions

- Feature-based modular structure
- Separation of UI and business logic
- Reusable shared components
- Mock data isolated in service layer
- Custom hook for filtering logic

---

## 🧠 State Management

- Local state with `useState` for UI interactions
- Centralized `FilterState` for filtering logic
- Derived provider list via custom hook:

```ts useFilteredProviders(providers, filters)  ```ts

This ensures clean separation between UI and business logic.


🔍 Features

Provider List

* Search by name, specialty, or keyword
* Provider cards show:
    * Name
    * Specialty
    * City / Country
    * Rating
* Empty state handling

Filtering

Users can filter providers by:

* Country
* City
* Provider type (Doctor / Clinic / Hospital)
* Minimum rating
* Specialty

Filter logic is implemented with a toggle-based approach for better UX.

⸻

Provider Detail

* Basic profile information
* Contact info (mock structure)
* Bio / description section

⸻

⏳ Loading State

A simulated loading state is implemented to improve UX realism.

* Fake delay (500–1000ms)
* Loading screen shown before data render

   ```ts <LoadingState text="Loading your results..." /> ```ts

📭 Empty State

When no providers match filters:

* Friendly empty state UI
* Suggests changing filters or search terms

