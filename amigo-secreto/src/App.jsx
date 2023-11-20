import { useState } from "react";
import Form from "./components/Form";

export default function App() {
  const [friendNameInput, setFriendNameInput] = useState("");
  const [friends, setFriends] = useState("");
  const [chosenFriends, setChosenFriends] = useState("");

  let valueCaptured = "";

  const captureValue = (value) => {
    setFriendNameInput((valueCaptured += value));
  };

  const startGame = (e) => {
    e.preventDefault();

    if (friendNameInput === "") {
      alert("Necessario inserir o nome do amigo.");
      return;
    } else if (friends === "") {
      setFriends(friendNameInput);
    } else {
      setFriends((value) => {
        return (value += `, ${friendNameInput}`);
      });
    }

    setFriendNameInput("");
  };

  const toPlay = (e) => {
    e.preventDefault();

    const friendList = friends.split(",").length;

    if (chosenFriends !== "") {
      return;
    }

    if (friendList < 4) {
      alert("Precisamos de 4 ou mais amigos para iniciar o sorteio.");
      return;
    }

    for (let i = 0; i < friendList; i++) {
      if (i === friendList - 1) {
        setChosenFriends((value) => {
          return (value += `${friends.split(",")[i]} -> ${
            friends.split(",")[0]
          }`);
        });

        return;
      }

      setChosenFriends((value) => {
        return (value += `${friends.split(",")[i]} -> ${
          friends.split(",")[i + 1]
        },`);
      });
    }
  };

  const clear = (ev) => {
    ev.preventDefault();

    setFriends("");
    setChosenFriends("");
  };

  return (
    <>
      <main className="main-content">
        <section className="secret-friend-section">
          <h1 className="secret-friend-section__secret-friend-section-title">
            Amigo
            <span className="secret-friend-section-title--color">Secreto</span>
          </h1>

          <Form
            friendNameInput={friendNameInput}
            captureValue={captureValue}
            startGame={startGame}
            toPlay={toPlay}
            clear={clear}
          />
          <section className="secret-friend-section__friends-section-for-raffle container">
            <div className="friends-section-for-raffle__group-of-chosen-friends">
              <h2 className="group-of-chosen-friends__title-of-the-chosen-group-of-friends">
                Amigos incluídos
              </h2>
              <div className="group-of-chosen-friends__friends">{friends}</div>
            </div>
            <div className="friends-section-for-raffle__chosen-friends-container">
              <h2 className="chosen-friends-container__chosen-friends-container-title">
                Sorteio
              </h2>
              <div className="chosen-friends-container__chosen-friends">
                {chosenFriends.split(",").map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
