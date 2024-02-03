import { useNavigate } from "react-router-dom";
import Button from "../../../componets/reusable/button";
import { authRoutes } from "../../../routes/routes";
import Story from "../../../componets/home/Story";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate(authRoutes.signIn.path)
  }
  const [storyData, setStoryData] = useState([
    // Add your story data here
    // Each story item could have properties like id, username, imageUrl, etc.
    { id: 1, username: "user1", imageUrl: "url1" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },
    { id: 2, username: "user2", imageUrl: "url2" },

    // Add more story items as needed
  ]);
  return (
    <>
    <Story data={storyData} />

        <Button onClick={handleLogout}>Logout</Button>asasd
    </>
  )
}
