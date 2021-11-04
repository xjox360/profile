import React, { useState } from "react";

export default function BackgroundScreen() {
  let [clase, setClase] = useState(false);
  return (
    <div>
      <h1 className="beautyTitle">Background</h1>
      <main className="cardContainer">
        <section className="card" onClick={() => setClase(!clase)}>
          <h1>Industrial Engineer</h1>
          <ul>
            <li>
              <b>School:</b> Universitaria Agustiniana
            </li>
            <div className={clase ? "overCardInv" : "overCard"}>
              <li>
                <b>School2:</b> Universitaria Agustiniana
              </li>
              <li>
                <b>School3:</b> Universitaria Agustiniana
              </li>
            </div>
          </ul>
        </section>
        <section className="card">
          <h1>Industrial Engineer</h1>
          <ul>
            <li>
              <b>School:</b> Universitaria Agustiniana
            </li>
          </ul>
        </section>
        <section className="card">
          <h1>Industrial Engineer</h1>
          <ul>
            <li>
              <b>School:</b> Universitaria Agustiniana
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
