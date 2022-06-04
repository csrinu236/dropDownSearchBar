import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
function App() {
  const categories = [
    "All categories",
    "Electronics",
    "Furniture",
    "Sports",
    "Health",
    "Fashion",
  ];
  const [item, setItem] = useState(categories[0]);
  const [show, setShow] = useState(false);
  return (
    <>
      <main className="section">
        <section className="section-center">
          <form className="form">
            <div className="formControl">
              <div onClick={() => setShow(!show)}>
                <label>{item}</label>
                <AiFillCaretDown></AiFillCaretDown>
              </div>
              <input type="text" placeholder={`search in ${item}`} />
            </div>
            <div
              className={`inputBox`}
              style={{ height: `${show ? categories.length * 36 : 0}px` }}>
              {categories.map((inputItem, index) => {
                return (
                  <p
                    key={index}
                    className="inputItem"
                    onClick={() => {
                      setItem(inputItem);
                      setShow(false);
                    }}>
                    {inputItem}
                  </p>
                );
              })}
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
