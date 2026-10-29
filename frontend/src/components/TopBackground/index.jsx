import UsersImage from '../../assets/users.png'
import { Background } from './styles'


function TopBackground({ children, ...props}){
    

    return(
        <Background>
            <img src={UsersImage} alt='imagem-usuarios' />
        </Background>
    )
}

export default TopBackground