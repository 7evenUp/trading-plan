import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AddCircle, Check, Cancel } from "iconoir-react"

import { trim } from "../lib/trim"

import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { add } from "../redux/plan/planSlice"

import SegmentedButton from "./SegmentedButton"
import SegmentedButtonsContainer from "./SegmentedButtonsContainer"
import Tooltip from "./Tooltip"
import FilledTextField from "../shared/ui/FilledTextField"
import Button from "../shared/ui/Button"
import { Slider } from "../shared/ui/Slider"

const TP_MAX = 3
const DEFAULT_TP = 5

const CreatePlanForm = ({ closeForm }: { closeForm: () => void }) => {
  const [name, setPlanName] = useState("")
  const [deposit, setDeposit] = useState("")
  const [goal, setGoal] = useState("")
  const [risk, setRisk] = useState("")
  const [leverage, setLeverage] = useState([1])
  const [tp, setTp] = useState("")
  const [isTPCreating, setIsTPCreating] = useState(false)
  const [tpArray, setTpArray] = useState<number[]>([])

  const navigate = useNavigate()

  const plans = useAppSelector((state) => state.plans)
  const dispatch = useAppDispatch()

  const onCreate = () => {
    dispatch(
      add({
        id: trim(name),
        title: name.trim(),
        deposit: parseInt(deposit),
        goal: parseInt(goal),
        risk: parseFloat(risk),
        leverage: leverage[0],
        takeProfit: tpArray.length ? tpArray : [DEFAULT_TP],
      })
    )
    closeForm()
    navigate(`/plan/${trim(name)}`)
  }

  return (
    <div className="w-full p-6 rounded-xl bg-surfaceContainer">
      <h2 className="text-[22px] leading-7 text-center mb-6">
        {plans.length ? "Create new plan" : "Create your first plan"}
      </h2>
      <form className="flex flex-col gap-4 w-full">
        <FilledTextField
          className="w-full"
          label="Name for your strategy"
          name="name"
          value={name}
          onChange={(evt) => setPlanName(evt.currentTarget.value)}
        />
        <FilledTextField
          className="w-full"
          label="Total Deposit"
          name="deposit"
          value={deposit}
          onChange={(evt) => setDeposit(evt.currentTarget.value)}
        />
        <FilledTextField
          className="w-full"
          label="Trading goal"
          name="goal"
          value={goal}
          onChange={(evt) => setGoal(evt.currentTarget.value)}
        />
        <div className="flex flex-col gap-1">
          <span className="text-onSurface font-medium text-base leading-6 tracking-[0.15px]">
            Risk management
          </span>
          <SegmentedButtonsContainer>
            <SegmentedButton
              id="lazy"
              label="1%"
              name="risk"
              value="1"
              onChange={(evt) => {
                setRisk(evt.target.value)
              }}
            />
            <SegmentedButton
              id="active"
              label="2%"
              name="risk"
              value="2"
              onChange={(evt) => {
                setRisk(evt.target.value)
              }}
            />
            <SegmentedButton
              id="full"
              label="5%"
              name="risk"
              value="5"
              onChange={(evt) => {
                setRisk(evt.target.value)
              }}
            />
          </SegmentedButtonsContainer>
        </div>
        <div>
          <span className="text-onSurface font-medium text-base leading-6 tracking-[0.15px]">
            Leverage is {leverage}X
          </span>
          <Slider
            className="w-full"
            value={leverage}
            onValueChange={setLeverage}
            min={1}
            max={25}
            showLabel={false}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-6 items-center">
            <Tooltip title="Take profit in %. For example for level breakdown it is from 0.4% up to 1%, for swing trading it is from 3% to 5-6%. Set TP as you usually trade. Default take profit is 5%">
              <span className="text-onSurface font-medium text-base leading-6 tracking-[0.15px] border-b border-dashed border-outline">
                TP strategy
              </span>
            </Tooltip>

            <span className="text-onSurface font-medium text-base leading-6 tracking-[0.15px]">
              {tpArray.length}/{TP_MAX}
            </span>
            {isTPCreating ? (
              <div className="ml-auto flex">
                <Check
                  className="cursor-pointer"
                  width={20}
                  height={20}
                  onClick={() => {
                    setTpArray([...tpArray, parseFloat(tp)])
                    setIsTPCreating(false)
                    setTp("")
                  }}
                />
                <Cancel
                  className="cursor-pointer"
                  width={20}
                  height={20}
                  onClick={() => {
                    setIsTPCreating(false)
                    setTp("")
                  }}
                />
              </div>
            ) : (
              <AddCircle
                className="ml-auto cursor-pointer"
                width={22}
                height={22}
                onClick={() => {
                  setIsTPCreating(true)
                }}
              />
            )}
          </div>
          <div className="flex gap-2">
            {tpArray.map((tp, i) => (
              <span key={i}>{tp}%</span>
            ))}
          </div>
          {isTPCreating && (
            <input
              className="text-onSurface bg-transparent outline-none text-base leading-6 tracking-[0.5px] border-b border-outline"
              min={0.1}
              max={100}
              step={0.1}
              type={"number"}
              value={tp}
              onChange={(evt) => setTp(evt.currentTarget.value)}
              placeholder="Take profit"
            />
          )}
        </div>

        <Button appearance="filled" onClick={onCreate} icon={<AddCircle />}>
          Create
        </Button>
      </form>
    </div>
  )
}

export default CreatePlanForm
