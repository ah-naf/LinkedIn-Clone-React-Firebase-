import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { colRef } from "./Firebase";
import {
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from 'react-flip-move'

export default function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    onSnapshot(query(colRef, orderBy("timestamp", "desc")), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || '',
      timestamp: serverTimestamp(),
    }).then(() => {});

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
          <InputOption
            Icon={SubscriptionIcon}
            title={"Video"}
            color={"#E7A33E"}
          />
          <InputOption Icon={EventNoteIcon} title={"Event"} color={"#C0CBCD"} />
          <InputOption
            Icon={CalendarViewDayIcon}
            title={"Write article"}
            color={"#7FC15E"}
          />
        </div>
      </div>

      {/* POST */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
      </FlipMove>
    </div>
  );
}
