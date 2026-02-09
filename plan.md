# Weekend Battle Plan: "Enterprise Employee Directory"
**Cilj:** Napraviti Proof of Concept (PoC) aplikaciju koja demonstrira Senior React arhitekturu, TypeScript sigurnost i CI/CD procese. Ne pravimo "Todo listu", pravimo "Enterprise Dashboard".

---

## 📅 SUBOTA: Core Architecture & TypeScript

### 09:00 - 11:00 | Setup & Strict TypeScript
Startujemo sa modernim toolingom (Vite) i strogim pravilima.

1.  **Inicijalizacija:**
    `npm create vite@latest enterprise-dashboard -- --template react-ts`
2.  **Arhitektura Foldera (Feature-based structure):**
    ```
    src/
      ├── components/   # (Generic UI: Button, Input, Card - tvoj "Design System")
      ├── features/     # (Business domains: EmployeesList, Analytics)
      ├── hooks/        # (Global Custom Hooks: useDebounce, useLocalStorage)
      ├── context/      # (Global State: ThemeContext, AuthContext)
      ├── layouts/      # (MainLayout, AuthLayout)
      ├── services/     # (API Layer: Axios instanca, Endpoints)
      ├── types/        # (Shared TypeScript interfaces/enums)
      └── lib/          # (Configs: axios setup, utils)
    ```
3.  **Zadatak:** Podesi `tsconfig.json` na `strict: true` i dodaj alias-e (npr. `@/components`).

### 11:00 - 14:00 | "Scalable Styling" & Design System
Demonstriraš "Strong CSS expertise" i "Layout systems".

1.  **Stack:** Instaliraj **Tailwind CSS** + `clsx` (za uslovne klase).
2.  **Atomic Components:**
    *   `Button.tsx`: Props: `variant` ('solid', 'outline'), `size`, `isLoading`.
    *   `Grid.tsx`: Reusable layout komponenta (Flex/Grid).
3.  **Accessibility (A11y):**
    *   Dugmići moraju imati `aria-label`.
    *   Fokus stanja moraju biti vidljiva (tab navigation check).

### 15:00 - 18:00 | Data Fetching & Custom Hooks (The Senior Way)
Ovde dokazuješ da znaš da razdvojiš UI od logike.

1.  **API:** Koristi [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
2.  **Custom Hook `useUsers.ts`:**
    *   Ne piši `fetch` direktno u komponenti!
    *   Hook treba da vrati: `{ data, isLoading, isError, refetch }`.
    *   Koristi **TypeScript Generics** za tip podataka `<User[]>`.
3.  **Renderovanje:** Prikaz podataka u Grid-u koristeći naše komponente.

### 19:00 - 21:00 | Global State (Context API)
Demonstracija modernog state managementa bez Redux-a.

1.  **ThemeContext:** Implementacija Dark/Light mode-a.
    *   Napravi `ThemeProvider`.
    *   Napravi custom hook `useTheme()`.
2.  **Pattern:** Demonstriraj `Props Drilling` problem i kako ga Context rešava.

---

## 📅 NEDELJA: Routing, Resilience & Ops (Level Up)

### 09:00 - 11:30 | Advanced Routing & Resilience
Aplikacija više nije "igračka", sada ima strukturu i error handling.

1.  **React Router v6.4+ (Data APIs):**
    *   Instaliraj `react-router-dom`.
    *   Koristi `createBrowserRouter` i `loaders` za fetch podataka (Parallel fetching).
    *   **Zašto:** Dokazuješ da pratiš najnovije standarde (ne waterfall fetches u `useEffect`).
2.  **Error Boundaries (`improving code reliability`):**
    *   Instaliraj `react-error-boundary`.
    *   Umotaj delove aplikacije (ili celu) u ErrorBoundary.
    *   Napravi lepu `fallbackUI` ("Oops, something went wrong" + dugme "Try again").

### 11:30 - 13:00 | React Performance Patterns
Simuliramo kompleksnost da bi opravdali optimizacije.

1.  **Scenario:** Dodaj search bar koji filtrira korisnike u realnom vremenu.
2.  **`useMemo`:** Upakuj filtriranu listu da se ne računa ponovo pri svakom re-renderu.
3.  **`useCallback`:** Memoizuj event handlere koji se prosleđuju child komponentama.
4.  **`React.memo`:** Optimizuj `UserCard` komponentu.

### 13:30 - 15:30 | Robust Forms (React Hook Form + Zod)
Enterprise app = Forme.

1.  **Stack:** `react-hook-form` + `zod` (schema validation).
2.  **Feature:** "Edit Employee" modal/forma.
3.  **Validacija:**
    *   Demonstriraj Type Inference iz Zod šeme u TypeScript interfejs.

### 15:30 - 17:30 | Testing Strategy (MSW + Vitest)
"Mock Service Worker" je tvoj kec u rukavu za Enterprise testing.

1.  **Network Mocking:**
    *   Instaliraj **MSW (Mock Service Worker)**.
    *   Napravi mock handlere za `/users` endpoint.
    *   Namesti da testovi rade OFFLINE (bez gađanja pravog API-ja).
2.  **Integration Test:**
    *   Napiši test koji proverava da li se lista prikazuje koristeći Mock podatke.

### 17:30 - 19:00 | CI/CD & DevOps
Popunjavanje one rupe u CV-u vezane za Azure DevOps/Pipelines.

1.  **GitHub Actions:** Napravi `.github/workflows/ci.yml`.
2.  **Pipeline Steps:** Checkout -> Install -> Lint -> Test (sa MSW) -> Build.
3.  **Cilj:** Da imaš zeleni štiklir na GitHub repou.

---

## 🏆 KONAČNI REZULTAT (Checklist za ponedeljak)

Tvoj GitHub repo **MORA** da ima ove "Enterprise" indikatore:
- [ ] **Data Loaders:** Fetching na ruter nivou (ne u komponenti).
- [ ] **Error Boundaries:** Aplikacija ne puca, ona hendluje greške.
- [ ] **MSW Mocks:** Testovi rade pouzdano i bez interneta.
- [ ] **Strict TypeScript:** Bez `any` tipova.
- [ ] **CI/CD Status Badge:** Dokaz automatizacije.

