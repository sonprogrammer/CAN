import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StyledBox, StyledCloseButton, StyledContainer, StyledContent, StyledDeleteBtn, StyledEditAnswer, StyledEditBtn, StyledEditDescription, StyledEditProblem, StyledLogoutModal, StyledModalContent, StyledModalOverlay } from './style'
import DeleteModal from '../../components/ProblemComponent/DeleteModal'
import useGetProblem from '../../hooks/useGetProblem'


export default function SearchPage() {
    const [searchList, setSearchList] = useState([])
    const [currentUser, setCurrentUser] = useState('')
  const [showAnswerStates, setShowAnswerStates] = useState([]);
  const [modal, setModal] = useState(null)
  const [editProblem, setEditProblem] = useState(false)
  const [deleteModal, setDeletModal] = useState(false)
  const [searchError, setSearchError] = useState('')
  const [updatedProblem, setUpdatedProblem] = useState(
    {
      id: '',
      problem: '',
      answer: '',
      description: '',
    }
  )

  const navigate = useNavigate()

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery()
    const searchTerm = query.get('q')

    useEffect(() => {
        const fetchCurrentUser = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/account/current-user', { withCredentials: true })
            setCurrentUser(response.data._id)
        } catch (error) {
            console.log('failed to get current user', error)
        }
    }
    fetchCurrentUser()
}, [])

console.log('re', currentUser)

const { problems, setProblems } = useGetProblem(currentUser)


  useEffect(() => {
    setShowAnswerStates(new Array(problems.length).fill(false))
    //*problems의 개수에 따라 showAnswerStates 배열을 초기화
  }, [problems]);


  const handleClick = (e, i) => {
    e.stopPropagation();
    setShowAnswerStates(prevStates => {
      const newStates = [...prevStates]
      newStates[i] = !newStates[i]
      return newStates
    })
  }

  const handleModalClick = (i) => {
    setModal(i)
  }

  const handleEditClick = () => {
    setEditProblem(!editProblem)
  }

 


  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/problem/update`, updatedProblem);
      console.log(response)
      
      setEditProblem(!editProblem)
      navigate('/browse/search')
    } catch (error) {
      console.error('failed to save problem', error)
    }
  }

    useEffect(()=>{
        if(searchTerm){
            fetchSearchProblem(searchTerm)
        }
    },[searchTerm])
    
    const fetchSearchProblem = async(searchTerm) =>{
        try {
            const response = await axios.get(`http://localhost:3000/api/problem/search?q=${searchTerm}&userId=${currentUser}`)
            setSearchList(response.data)
            if(response.data.length === 0){
              setSearchError('검색된 결과가 없습니다.')
            }else{
              setSearchError('')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <StyledBox>
      {searchError ? (
        <p className='text-gray-500'>{searchError}</p>
      ) : (
    searchList.map((problem, i) => (
      <>
        <StyledContainer key={i} answerStatus={showAnswerStates[i]} onClick={() => handleModalClick(i)}>
          <p>{problem.problem}</p>
          {showAnswerStates[i] ? (
            <h1 onClick={(e) => handleClick(e, i)}>답 : {problem.answer}</h1>
          ) : (
            <h1 onClick={(e) => handleClick(e, i)}>Check the answer</h1>
          )}
        </StyledContainer>
        {modal === i && (
          <DetailModal 
            onClose={handleModalClick}
            handleEditClick={handleEditClick} 
            handleSaveClick={handleSaveClick} 
            editProblem={editProblem} 
            problem={problem} 
            setUpdatedProblem={setUpdatedProblem} 
            updatedProblem={updatedProblem}
            deleteModal={deleteModal}
            setDeletModal={setDeletModal}
            isOpen={modal === i}
            currentUser={currentUser}
             />
        )}
      </>
    )))}

  </StyledBox>
)
}

function DetailModal({ onClose, handleEditClick, handleSaveClick, editProblem, problem, setUpdatedProblem, updatedProblem, deleteModal, setDeletModal, isOpen }) {
const stopPropagation = (e) => {
  e.stopPropagation();
}

useEffect(()=>{
  setUpdatedProblem(problem)
},[problem, setUpdatedProblem])

const handleChange = (e) => {
  const { name, value } = e.target;
  setUpdatedProblem({
    ...updatedProblem,
    [name]: value
  })
}

const handleDeleteClick = () =>{
  setDeletModal(!deleteModal)
}

const handleCancelDelete = () =>{
  setDeletModal(false)
}

const handleDeleteConfirm = async () =>{
  try {
    const result = await axios.delete('http://localhost:3000/api/problem/delete', {data : { _id : problem._id}})
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}

return (
  <StyledModalOverlay onClick={onClose}>
    <StyledModalContent onClick={stopPropagation}>
      <StyledCloseButton onClick={onClose}>Close</StyledCloseButton>

      {editProblem ? (
        <>
          <StyledContent>
            <StyledEditProblem name='problem' onChange={handleChange}>{problem.problem}</StyledEditProblem>
            <StyledEditAnswer name='answer' onChange={handleChange}>{problem.answer}</StyledEditAnswer>
            <StyledEditDescription  name='description' onChange={handleChange}>{problem.description}</StyledEditDescription>
          </StyledContent>
          <StyledEditBtn onClick={handleSaveClick}>Save</StyledEditBtn>
        </>
      ) : (
        <>
          <StyledContent>
            <p>{problem.problem}</p>
            <h2>{problem.answer}</h2>
            <p>{problem.description}</p>
          </StyledContent>
          <div className='flex'>
          <StyledEditBtn onClick={handleEditClick}>Edit</StyledEditBtn>
          <StyledDeleteBtn onClick={handleDeleteClick}>Delete</StyledDeleteBtn>
          </div>
          <StyledLogoutModal onClick={handleCancelDelete}>
          {deleteModal && (
              <DeleteModal onConfirm={handleDeleteConfirm} onCancel={handleCancelDelete} />
          )}
          </StyledLogoutModal>
        </>
      )}
    </StyledModalContent>
  </StyledModalOverlay>
)
}
