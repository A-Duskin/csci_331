"use client"
import CountButton from "./CountButton/CountButton.jsx"
import Link from "./Link/Link.jsx"
import SearchBar from "./SearchBar/SearchBar.jsx"
export default function Page() {
    return (<>
    <CountButton number={1} color="blue"/>
    <CountButton number={2} color="black"/>
    <hr />
    <Link />
    <hr />
    <SearchBar />
    </>)
  }