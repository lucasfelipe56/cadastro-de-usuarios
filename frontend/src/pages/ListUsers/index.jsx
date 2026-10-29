import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Trash from '../../assets/trash.svg'
import { CardUsers, Container, Title, ContainerUsers, TrashIcon, AvatarUsers} from './styles'

function ListUsers() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios')
      setUsers(data)
    }
    getUsers()
  }, [])

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`)

    const upadatedUsers = users.filter( user => user.id !== id)

    setUsers(upadatedUsers)
  }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>
      
      <ContainerUsers>
        {users.map(user => (
          <CardUsers key={user.id}>
            <AvatarUsers src={`https://avatarapi.runflare.run/public/boy?usearname=${user.id}`}/>
            <div>
              <h3>{user.name}</h3>
              <p>{`${user.age} anos`}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUser(user.id)}/>
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type='button' onClick={() => navigate('/')}>Voltar</Button>
    </Container>
  )
}

export default ListUsers
