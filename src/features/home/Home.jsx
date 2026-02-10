import { useState, useEffect, useRef } from "react";
import settings from "/images/settings.png";
import countdown from "/sound/countdown.mp3";
import countdownChild from "/sound/countdown_child.mp3";
import click from "/sound/click.mp3";
import ignore from "/sound/ignore.mp3";
import failed from "/sound/failed.mp3";
import winner from "/sound/winner.mp3";
import { dataMap } from "../../shared/data";

export const Home = () => {
  const [answered, setAnswered] = useState(1);
  const [second, setSecond] = useState(60);
  const [balance, setBalance] = useState(200000);
  const [startSecond, setStartSecond] = useState(3);
  const [currentBalance, setCurrentBalance] = useState([0, 0, 0, 0]);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showSelectedCategory, setShowSelecteCategory] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedData, setSelectedData] = useState(1);
  const { categories, questions } = dataMap[selectedData];
  const [isRunning, setIsRunning] = useState(false);
  const [startSecondRunning, setStartSecondRunning] = useState(false);
  const [isOpen, setIsOpen] = useState("beginModal");
  const [modalBalance, setModalBalance] = useState(0);
  const intervalRef = useRef(null);
  const intervalStartRef = useRef(null);
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const clickRef = useRef(null);
  const ignoreRef = useRef(null);
  const winnerRef = useRef(null);
  const failedRef = useRef(null);
  const currentData = dataMap[selectedData];

  useEffect(() => {
    const handleResize = () => {
      const app = document.querySelector("#app");
      if (!app) return;

      const BASE_WIDTH = 1920;
      const BASE_HEIGHT = 1080;
      const ASPECT = BASE_WIDTH / BASE_HEIGHT;

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      let gameW, gameH;

      if (screenW / screenH > ASPECT) {
        gameH = screenH;
        gameW = screenH * ASPECT;
      } else {
        gameW = screenW;
        gameH = screenW / ASPECT;
      }

      app.style.width = `${gameW}px`;
      app.style.height = `${gameH}px`;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecond((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (startSecondRunning) {
      intervalStartRef.current = setInterval(() => {
        setStartSecond((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalStartRef.current);
    }

    return () => clearInterval(intervalStartRef.current);
  }, [startSecondRunning]);

  useEffect(() => {
    if (startSecond <= 0) {
      setStartSecondRunning(false);
      setTimeout(() => {
        setIsOpen(null);
        setIsRunning(true);
        audioRef.current.play();
        audioRef2.current.pause();
        audioRef2.current.currentTime = 0;
      }, 1500);
    }
  }, [startSecond]);

  useEffect(() => {
    if (second <= 0) {
      setIsRunning(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      handleResult();
    }
  }, [second]);

  const handleCategory = (category) => {
    clickRef.current.play();
    const qst = getCurrentQuestion(category);
    setCurrentQuestion(qst);
    setShowSelecteCategory(false);
    setStartSecondRunning(true);
    audioRef2.current.play();
    setIsOpen("startModal");
  };

  const getCurentCategory = () => {
    const availableCategoryIds = [
      ...new Set(
        questions.filter((q) => q.level == currentLevel).map((q) => q.category),
      ),
    ];

    const shuffled = [
      ...categories.filter((c) => availableCategoryIds.includes(c.id)),
    ].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 2);
  };

  const getCurrentQuestion = (category) => {
    // const usedIds = JSON.parse(localStorage.getItem("usedQuestionIds")) || [];

    const qst = questions.filter(
      (q) =>
        // !usedIds.includes(q.id) &&
        q.category == category.id && q.level == currentLevel,
    );
    if (qst.length > 0) {
      return qst[0];
    }
    return false;
  };

  const handleBalance = (type, index) => {
    const sum = currentBalance.reduce((acc, val) => acc + val, 0);

    if (type === "plus") {
      if (sum >= balance) {
        ignoreRef.current.pause();
        ignoreRef.current.currentTime = 0;
        ignoreRef.current.play();
        return;
      }
      const nonZeroCount = currentBalance.filter((num) => num !== 0).length;
      const newBalance = [...currentBalance];

      if (newBalance[index] > 0) {
        clickRef.current.pause();
        clickRef.current.currentTime = 0;
        clickRef.current.play();

        newBalance[index] += 10000;
        setCurrentBalance(newBalance);
      } else {
        if (currentQuestion.answers.length - 1 > nonZeroCount) {
          clickRef.current.pause();
          clickRef.current.currentTime = 0;
          clickRef.current.play();

          newBalance[index] += 10000;
          setCurrentBalance(newBalance);
        } else {
          ignoreRef.current.pause();
          ignoreRef.current.currentTime = 0;
          ignoreRef.current.play();
        }
      }
    }

    if (type === "minus") {
      const newBalance = [...currentBalance];

      if (newBalance[index] <= 0) {
        ignoreRef.current.pause();
        ignoreRef.current.currentTime = 0;
        ignoreRef.current.play();
        return;
      }

      clickRef.current.pause();
      clickRef.current.currentTime = 0;
      clickRef.current.play();
      newBalance[index] -= 10000;
      setCurrentBalance(newBalance);
    }
  };

  const handleResult = () => {
    const trueIndex = currentQuestion.answers.findIndex(
      (a) => a.answerYn === true,
    );

    const answerBalance = currentBalance[trueIndex];
    setModalBalance(answerBalance);
    setBalance(answerBalance);
    if (answerBalance > 0) {
      setAnswered((prev) => prev + 1);
      if (currentLevel >= 7) {
        setIsOpen("completedModal");
        winnerRef.current.pause();
        winnerRef.current.currentTime = 0;
        winnerRef.current.play();
      } else {
        setIsOpen("winModal");
        winnerRef.current.pause();
        winnerRef.current.currentTime = 0;
        winnerRef.current.play();
      }
    } else {
      setIsOpen("loseModal");
      failedRef.current.pause();
      failedRef.current.currentTime = 0;
      failedRef.current.play();
    }
  };

  const handleContinue = () => {
    const usedIds = JSON.parse(localStorage.getItem("usedQuestionIds")) || [];
    usedIds.push(currentQuestion.id);
    localStorage.setItem("usedQuestionIds", JSON.stringify(usedIds));

    setCurrentLevel((prev) => prev + 1);
    setSecond(60);
    setStartSecond(3);
    setShowSelecteCategory(true);
    setCurrentQuestion(null);
    setCurrentBalance([0, 0, 0, 0]);
    setIsOpen(null);
  };

  const handleReset = () => {
    localStorage.removeItem("usedQuestionIds");
    setCurrentLevel(1);
    setSecond(60);
    setStartSecond(3);
    setShowSelecteCategory(true);
    setCurrentQuestion(null);
    setCurrentBalance([0, 0, 0, 0]);
    setBalance(200000);
    setIsOpen("beginModal");
    setAnswered(0);
  };

  const handleSkipTime = () => {
    setIsRunning(false);
    setStartSecondRunning(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    handleResult();
  };

  const handleSettings = () => {
    setIsOpen("settingsModal");
  };

  const getCurrentAnswer = () => {
    if (!currentQuestion) return "";
    const currIdx = currentQuestion.answers.findIndex(
      (ans) => ans.answerYn == true,
    );
    return currentQuestion.answers[currIdx].label;
  };

  return (
    <div id="app">
      <div className="header">
        <p>200 МЯНГЫН УНАЛТ</p>
        <img
          src={settings}
          alt=""
          style={{ height: "50%", width: "auto", cursor: "pointer" }}
          onClick={handleSettings}
        />
      </div>
      <section className="section">
        <div className="top">
          <div className="duration">
            <div className="inner">{second}</div>
          </div>
          {showSelectedCategory && !currentQuestion ? (
            <div className="select-category">
              {getCurentCategory().map((ct) => (
                <div
                  className="choose"
                  onClick={() => handleCategory(ct)}
                  key={`choose-category-${ct.id}`}
                >
                  {ct.name}
                </div>
              ))}
            </div>
          ) : (
            <div className="question">
              <p id="question">{currentQuestion.label}</p>
            </div>
          )}

          <div className="balance">
            <div className="inner">{answered}</div>
            <div className="wallet">{balance.toLocaleString()}</div>
          </div>
        </div>
        <div className="main" id="main">
          {currentQuestion &&
            currentQuestion.answers.map((answer, index) => (
              <div className="answer" key={`answer-${answer.label}`}>
                <div className="display">
                  <p>{answer.label}</p>
                </div>
                <div className="input">
                  <p>{currentBalance[index].toLocaleString()}</p>
                  <div className="buttons">
                    <button onClick={() => handleBalance("minus", index)}>
                      -
                    </button>
                    <button onClick={() => handleBalance("plus", index)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {currentQuestion &&
            Array.from({ length: 4 - currentQuestion.answers.length }).map(
              (_, index) => (
                <div className="answer" key={`answer-default-${index}`}>
                  <div className="display">
                    <p style={{ opacity: 0 }}>-</p>
                  </div>
                  <div className="input">
                    <p style={{ opacity: 0 }}>-</p>
                  </div>
                </div>
              ),
            )}
        </div>
        {currentQuestion && (
          <div
            style={{
              height: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <div
              style={{
                background: "#000000",
                color: "#FFFFFF",
                padding: "1vw 5vw",
                borderRadius: "60px",
                fontSize: "1vw",
                border: "5px solid silver",
              }}
            >
              {(
                balance - currentBalance.reduce((acc, val) => acc + val, 0)
              ).toLocaleString()}
            </div>

            <div
              style={{
                background: "#3a0000",
                color: "#FFFFFF",
                padding: "1vw 5vw",
                borderRadius: "60px",
                fontSize: "1vw",
                border: "5px solid silver",
                cursor: "pointer",
              }}
              onClick={handleSkipTime}
            >
              Шууд шалгах
            </div>
          </div>
        )}
      </section>
      <audio
        ref={audioRef}
        src={countdown}
        style={{
          opacity: 0,
          display: "absolute",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: -1,
        }}
      />
      <audio
        ref={audioRef2}
        src={countdownChild}
        style={{
          opacity: 0,
          display: "absolute",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: -1,
        }}
      />
      <audio
        ref={clickRef}
        src={click}
        style={{
          opacity: 0,
          display: "absolute",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: -1,
        }}
      />
      <audio
        ref={ignoreRef}
        src={ignore}
        style={{
          opacity: 0,
          display: "absolute",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: -1,
        }}
      />
      <audio
        ref={winnerRef}
        src={winner}
        style={{
          opacity: 0,
          display: "absolute",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: -1,
        }}
      />
      <audio
        ref={failedRef}
        src={failed}
        style={{
          opacity: 0,
          display: "absolute",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: -1,
        }}
      />

      {isOpen == "beginModal" && (
        <div className="modal begin">
          <button
            onClick={() => {
              clickRef.current.play();
              setIsOpen(null);
            }}
          >
            Эхлэх
          </button>
        </div>
      )}

      {isOpen == "settingsModal" && (
        <div className="modal settings">
          <div className="inner">
            <table>
              <tbody>
                <tr>
                  <td>Файл тохируулах</td>
                  <td>
                    <div>
                      <select
                        value={selectedData}
                        onChange={(e) =>
                          setSelectedData(Number(e.target.value))
                        }
                      >
                        {Object.keys(dataMap).map((key) => (
                          <option key={key} value={key}>
                            Data {key}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={handleReset}>Хадгалах</button>
          </div>
        </div>
      )}

      {isOpen == "startModal" && (
        <div className="modal">{startSecond > 0 ? startSecond : "GO"}</div>
      )}
      {isOpen == "completedModal" && (
        <div className="modal completed">
          <p>
            Та тоглоомыг амжилттай давлаа.
            <br /> Та {modalBalance.toLocaleString()} төгрөг хожлоо.{" "}
          </p>
          <button onClick={handleReset}>Дахин эхлүүлэх</button>
        </div>
      )}

      {isOpen == "loseModal" && (
        <div className="modal lose">
          <p>Уучлаарай, хариулт буруу байна.</p>
          <p>Зөв хариулт: {getCurrentAnswer()}</p>
          <button onClick={handleReset}>Дахин эхлүүлэх</button>
        </div>
      )}
      {isOpen == "winModal" && (
        <div className="modal win">
          <p>
            Та өөртөө {modalBalance.toLocaleString()} төгрөгийг
            <br />
            өөртөө хадгаллаа
          </p>
          <p>Зөв хариулт: {getCurrentAnswer()}</p>
          <button onClick={handleContinue}>Үргэлжлүүлэх</button>
        </div>
      )}
    </div>
  );
};
