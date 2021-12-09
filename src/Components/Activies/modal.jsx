import {
  ContainerModal,
  ActivityContainer,
  ContainerButtons,
  TitleContainer,
  FooterContainer,
} from "./style";
import { MdOutlineExitToApp } from "react-icons/md";
import Vetor from "../../assets/imgs/vetor.png";

function ActiviesModal() {
  return (
    <>
    
      <ContainerModal>
        <ActivityContainer>
          <TitleContainer>
            <h3>New Activity</h3>
            <button>
              <MdOutlineExitToApp />
            </button>
          </TitleContainer>
          <span>
            <input type="text" placeholder="Title" />
          </span>
          <p>How hard is it to keep this Goal?</p>
          <ContainerButtons>
            <button>Easy</button>
            <button>Hard</button>
            <button>Very Hard</button>
          </ContainerButtons>
          <FooterContainer>
            <p>What's the date to complete this activity?</p>
            <input type="date" />

            <button>Add</button>
          </FooterContainer>
        </ActivityContainer>

        <img src={Vetor} alt="vetor" />
      </ContainerModal>
    </>
  );
}

export default ActiviesModal;
