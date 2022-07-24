import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";

export function renderWithRouter(component, initialRoute = "/") {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
}
