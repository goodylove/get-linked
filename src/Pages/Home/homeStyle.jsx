import styled from "styled-components";
import { Colors } from "../../constants/Colors";

export const HomeWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .line {
    width: 100%;
    height: 1px;
    background-color: hsla(0, 0%, 100%, 0.18);
  }
  .star {
    top: 184px;
    position: absolute;
    left: 215px;
  }
  .hr-innovation {
    color: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: self-end;

    .img {
      margin-left: 16rem;
    }
  }
  .section-one {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 80%;

    .left-side {
         .saveIcon{
            width:40px
        }
        .hackstar{
            width:20px
        }
        
      .left-side-p {
        color: white;
        font-size: 19px;
        line-height: 33.2px;
        margin: 1.6rem 0;
      }
      .timer {
        color: #ffffff;
        font-size: 48px;
        display: flex;
        margin: 1.5rem  0;
        gap: 10px;
        Line height 63.84px ;
        span {
          font-size: 17px;
        }
      }
      .title {
        font-size: 36px;
        line-height: 94.8px;
        font-weight: 800;
        color: #ffffff;
        position: relative;

        .techbulb {
          position: absolute;
          left: 22rem;
          top: -18px;
          width: 30px;
        }
      }
    }
    .right-side {
      position: relative;
      .right-side-star{
       
      }

      .star {
        position: absolute;
        left: 15px;
        top: -10px;
      }
    }
  }

  @media screen and (max-width:1000px){
    .section-one {
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
    margin-top: 20px;

    .left-side {
        
      .left-side-p {
        color: white;
        font-size: 13px;
        line-height: 20.2px;
        margin: 1rem 0;
      }
      .timer {
        color: #ffffff;
        font-size: 48px;
        display: flex;
        margin: 1.5rem  0;
        gap: 10px;
        Line height 63.84px ;
        span {
          font-size: 17px;
        }
      }
      .title {
        font-size: 30px;
        line-height: 60.8px;
        font-weight: 900;
        color: #ffffff;
        position: relative;

        .saveIcon{
            width:40px
        }
        .hackstar{
            width:30px
        }
        .techbulb {
          position: absolute;
          left: 17.9rem;
          top: -20px;
          width: 30px;
        }
      }
    }
    .right-side {
      position: relative;

      .star {
        position: absolute;
        left: 15px;
        top: -10px;
      }
    }
  }

  }




    @media screen and (max-width:768px){
    .section-one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .left-side {
    text-align: center;
        
      .left-side-p {

        color: white;
        font-size: 13px;
        line-height: 20.2px;
        margin: 1rem 0;
      }
      .timer {
        color: #ffffff;
        font-size: 48px;
        display: flex;
        margin: 1.5rem  0;
        text-align: center;
        gap: 10px;
        Line height 63.84px ;
        span {
          font-size: 17px;
        }
      }
      .title {
        font-size: 30px;
        line-height: 60.8px;
        font-weight: 500;
        color: #ffffff;
        position: relative;

        .saveIcon{
            width:40px
        }
        .hackstar{
            width:30px
        }
        .techbulb {
          position: absolute;
          left: 17.9rem;
          top: -20px;
          width: 30px;
        }
      }
    }
    .right-side {
      position: relative;

      .star {
        position: absolute;
        left: 15px;
        top: -10px;
      }
    }
  }

  }


   @media screen and (max-width:580px){
     .hr-innovation {
    color: white;
    width: 80%;
    font-size:12px;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    align-items: self-end;

    .img {
      margin-left: 16rem;
    }
  }
    .section-one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .left-side {
    text-align: center;
        
      .left-side-p {

        color: white;
        font-size: 13px;
        line-height: 20.2px;
        margin: 1rem 0;
      }
      .timer {
        color: #ffffff;
        font-size: 48px;
        display: flex;
        margin: 1.5rem  0;
        text-align: center;
        gap: 10px;
        Line height 63.84px ;
        span {
          font-size: 17px;
        }
      }
      .timer-wrapper{
        display:flex;
        justify-content: center;
      }
      .title {
        font-size: 20px;
        line-height: 60.8px;
        font-weight: 400;
        color: #ffffff;
        position: relative;

        .saveIcon{
            width:40px
        }
        .hackstar{
            width:30px
        }
        .techbulb {
          position: absolute;
          left: 17.9rem;
          top: -20px;
          width: 30px;
        }
      }
    }
    .right-side {
      position: relative;
       .right-side-star{
        width: 300px;
       
      }


      .star {
        position: absolute;
        left: 15px;
        top: -10px;
      }
    }
  }

  }
  
`;
//   inset: 0px 0px auto auto;
