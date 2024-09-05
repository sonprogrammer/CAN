import React, { useEffect, useState } from 'react'
import { StyledAnswer, StyledBox, StyledContainer, StyledContent, StyledMark } from './style'
import axios from 'axios'
import useGetProblem from '../../hooks/useGetProblem'

export default function TestComponent() {
    const [currentUser, setCurrentUser] = useState('')
    const [randomProblems, setRandomProblems] = useState([])
    const [answers, setAnswers] = useState({})
    const [showAnswer, setShowAnwser] = useState(false)

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/account/current-user', { withCredentials: true })
                console.log('response', response.data)
                setCurrentUser(response.data._id)
            } catch (error) {
                console.log('failed to get current user', error)
            }
        }
        fetchCurrentUser()
    }, [])

    const { problems } = useGetProblem(currentUser)
    console.log('current user', currentUser)
    console.log('problem', problems)


    useEffect(() => {
        if (problems.length > 0) {
            const shuffleProblems = shuffle(problems)
            const testProblems = shuffleProblems.slice(0, 20)
            setRandomProblems(testProblems)
        }
    }, [problems])

    const shuffle = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleMarkClick = () =>{
        setShowAnwser(!showAnswer)
    }

    const handleAnswerChange= (i, value) =>{
        setAnswers((prev) =>({
            ...prev,
            [i]: value
        }))
    }

    return (
        <div>
            <StyledBox>
                {randomProblems.map((problem, i) => (
                    <StyledContainer key={i}>
                        <StyledContent>{problem.problem}</StyledContent>
                        <StyledAnswer cols={40} rows={3} placeholder='정답을 입력하세요' value={answers[i] || ''} onChange={(e)=>handleAnswerChange(i, e.target.value)}/>
                        {showAnswer && (
                            <div>
                                <p>정답 : {problem.answer}</p>
                                <p>해설 : {problem.description}</p>
                            </div>
                        )}
                    </StyledContainer>
                ))}
            </StyledBox>
            <StyledMark onClick={handleMarkClick}>채점하기</StyledMark>
        </div>
    )
}


