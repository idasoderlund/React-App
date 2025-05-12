import React from "react";

function MyProfile() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#EF88AD",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/*profilbild och namn*/}
      <div style={{ textAlign: "center" }}>
        <img
          src="assignment-app/src/Images/IMG_5294.JPG"
          alt="Profilbild"
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            objectFit: "cover",
            marginBottom: "15px",
          }}
        />

        <h2 style={{ margin: "10px 0" }}>Ida Söderlund</h2>
        <p style={{ color: "#555" }}> Premium Member since 2017.06.15</p>
      </div>

      {/*Kontaktinformationen*/}
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ marginTop: "20px" }}>Contact Details</h3>
        <p>
          <strong>Phone:</strong>070-0000000
        </p>
        <p>
          <strong>Email</strong>fake.fake@fake.com
        </p>
        <p>
          <strong>Social Security Number:</strong>00000000-xxxx
        </p>
        <p>
          <strong>Membership Information:</strong>Premium | 399:- / month.
        </p>
        <p>
          <strong>Payment Method</strong>Autogiro, Bank Account '000-0 000 000
          00'
        </p>
      </div>
    </div>
  );
}

export default MyProfile;
