import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [brightness, setBrightness] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__identity">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="header__container__identity_logo"
          />
          <span
            style={{ color: brightness === true ? "#83d4ff" : "white" }}
            className="header__container__identity_name"
          >
            박 성 현 ( 朴 盛 玄 )
          </span>
        </div>
        <div className="header__container__contact">
          {brightness === true ? (
            <div
              onClick={() => {
                setBrightness(false);
                document.body.style.backgroundColor = "white";
              }}
              className="header__container__contact_sun"
            />
          ) : (
            <div
              onClick={() => {
                setBrightness(true);
                document.body.style.backgroundColor = "black";
              }}
              className="header__container__contact_moon"
            />
          )}
          <div
            onClick={() => {
              const email = "codiee@naver.com";
              navigator.clipboard.writeText(email);
              alert("이메일 주소가 복사되었습니다."); // 모달창으로 바꾸기
            }}
            className="header__container__contact_email"
          />
          <Link to={"https://github.com/Hyun-EG"} target="blank">
            <div className="header__container__contact_github" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
