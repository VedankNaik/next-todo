import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";

export default function Home() {
  const mystyle = {
    display: "display: flex",
  };

  return (
    <Container maxW="7xl">
      <div style={mystyle}>
        <Auth />
        <AddTodo />
      </div>
      <TodoList />
    </Container>
  );
}
