"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { makeStore } from "./lib/store";
import StoreProvider from './StoreProvider';
const store = makeStore();


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
