import { ButtonContainer } from './styles';

const Buttons = ({ title, fullsize, props, style }) => {
    return (
        <div className={fullsize ? 'd-grid' : ''}>
            <ButtonContainer className={`btn btn-primary ${style ?? ''}`} {...props}>
                {title}
            </ButtonContainer>
        </div>
    )
}

export default Buttons;