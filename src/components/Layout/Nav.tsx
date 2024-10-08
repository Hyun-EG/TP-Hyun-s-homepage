import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav__container">
        {showNav === false ? (
          <>
            <div className="nav__container__border" />
            <div
              onClick={() => {
                setShowNav(true);
              }}
              className="nav__container__btnArea"
            >
              <div className="nav__container__btnArea_btn">
                Menu <span className="arrow">▼</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="nav__container__navBar">
              <div className="nav__container__navBar__list">
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  대시보드
                </div>
                <div
                  onClick={() => {
                    navigate("/introduce");
                  }}
                >
                  박성현이 누구야
                </div>
                <div
                  onClick={() => {
                    navigate("/board");
                  }}
                >
                  게시판
                </div>
                <div
                  onClick={() => {
                    navigate("/ing");
                  }}
                >
                  공사중
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setShowNav(false);
              }}
              className="nav__container__btnArea"
            >
              <div className="nav__container__btnArea_btn">
                숨기기 <span className="arrow">▲</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
