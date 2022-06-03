import { ButtonContainer } from './styles';

const Button = ({ title, fullsize, props }) => {
    return (
        <div className={fullsize ? 'd-grid' : ''}>
            <ButtonContainer className="btn btn-primary" {...props}>
                {title}
            </ButtonContainer>
        </div>
    )
}

export default Button;