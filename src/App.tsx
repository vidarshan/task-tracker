import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Group,
  ActionIcon,
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
} from "@mantine/core";
import "./App.css";
import { BiNote, BiSun } from "react-icons/bi";
import { FaStickyNote, FaJira, FaGithub, FaUserCircle } from "react-icons/fa";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";
import Login from "./pages/authentication/Login";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme: "light" }} withGlobalStyles={true}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
