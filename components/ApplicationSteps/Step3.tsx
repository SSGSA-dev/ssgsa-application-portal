import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ProceedButtons from './ProceedButtons'
import { useAuth } from '../../context/AuthUserContext'
import { AnswerType } from '../../types'
import { updateApplicationData } from '../../pages/api/step3'
import { ApplicationData } from '../../classes/application_data'

type Props = {
  applicationData: ApplicationData
  status: number
  setStatus: Dispatch<SetStateAction<Number>>
}

const Step3 = ({ applicationData, status, setStatus }: Props) => {
  const { authUser } = useAuth()
  const [answers, setAnswers] = useState<AnswerType>({})
  const [error, setError] = useState<string>('')

  const questionComponent = (index, question) => (
    <div className="p-2">
      <p className="font-bold md:text-lg">
        {String.fromCharCode(index + 96)}) {question}
        <span className="text-red-850 font-black">
          *{' '}
          {answers[`SOP${index}`]
            ? answers[`SOP${index}`].split(' ').length
            : null}
          /200
        </span>
      </p>
      <textarea
        name={`SOP${index}`}
        rows={4}
        cols={10}
        value={answers[`SOP${index}`]}
        onChange={(e) =>
          setAnswers((prevAnswers: AnswerType) => {
            return {
              ...prevAnswers,
              [`SOP${index}`]: e.target.value,
            }
          })
        }
        className="w-full rounded-xl p-2 mt-1"
      />
    </div>
  )

  useEffect(() => {
    setAnswers(applicationData.sop_answers || {})
  }, [applicationData])

  const nextStep = () => {
    setError('')
    if (
      answers['SOP1'] &&
      answers['SOP1'].split(' ').length >= 20 &&
      answers['SOP1'].split(' ').length <= 200
    ) {
      if (
        answers['SOP2'] &&
        answers['SOP2'].split(' ').length >= 20 &&
        answers['SOP2'].split(' ').length <= 200
      ) {
        if (
          answers['SOP3'] &&
          answers['SOP3'].split(' ').length >= 20 &&
          answers['SOP3'].split(' ').length <= 200
        ) {
          if (
            answers['SOP4'] &&
            answers['SOP4'].split(' ').length >= 20 &&
            answers['SOP4'].split(' ').length <= 200
          ) {
            if (
              answers['SOP5'] &&
              answers['SOP5'].split(' ').length >= 20 &&
              answers['SOP5'].split(' ').length <= 200
            ) {
              if (applicationData.form_status == 3) {
                updateApplicationData(authUser.id, answers, 4)
                  .then(() => {
                    setStatus(4)
                  })
                  .catch(() => {
                    setError('Try again, network error!')
                  })
              } else {
                updateApplicationData(
                  authUser.id,
                  answers,
                  applicationData.form_status,
                )
                  .then(() => {
                    setStatus(4)
                  })
                  .catch(() => {
                    setError('Try again, network error!')
                  })
              }
            } else
              setError(
                `For Question e, your response must be between 20 and 200 words`,
              )
          } else
            setError(
              `For Question d, your response must be between 20 and 200 words`,
            )
        } else
          setError(
            `For Question c, your response must be between 20 and 200 words`,
          )
      } else
        setError(
          `For Question b, your response must be between 20 and 200 words`,
        )
    } else
      setError(`For Question a, your response must be between 20 and 200 words`)
  }

  const previousStep = () => setStatus(2)

  const saveInformation = () => {
    setError('')
    return updateApplicationData(
      authUser.id,
      answers,
      applicationData.form_status,
    )
  }

  return (
    <div>
      <div className="bg-gray-200 rounded-3xl py-5 px-3 sm:py-10 sm:px-10">
        <p className="text-xs sm:text-sm md:text-base text-red-850 pl-2">
          Note: Remember to save your information at frequent intervals.
          <br />
          Your response must be between 20 and 200 words for each question.
        </p>
        <br />
        {questionComponent(1, process.env.NEXT_PUBLIC_QUESTION_1)}
        {questionComponent(2, process.env.NEXT_PUBLIC_QUESTION_2)}
        {questionComponent(3, process.env.NEXT_PUBLIC_QUESTION_3)}
        {questionComponent(4, process.env.NEXT_PUBLIC_QUESTION_4)}
        {questionComponent(5, process.env.NEXT_PUBLIC_QUESTION_5)}
      </div>
      <ProceedButtons
        status={status}
        formStatus={applicationData.form_status}
        previousStep={previousStep}
        nextStep={nextStep}
        saveInformation={saveInformation}
        error={error}
        setError={setError}
      />
    </div>
  )
}

export default Step3
