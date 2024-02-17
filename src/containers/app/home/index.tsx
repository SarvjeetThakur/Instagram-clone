import Story from "../../../componets/home/Story";
import { useMemo } from "react";
import Posts from "../../../componets/home/Posts";

export default function Home() {
  const storyData = useMemo(()=>([
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
  ]),[]);
 
  return (
    <>
      <Story data={storyData} />
      <Posts posts={[1, 2, 3, 4, 5]} />
    </>
  )
}
