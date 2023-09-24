'use client';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ReactNode, useCallback, useState} from "react";
import {Avatar, Box, Stack, StepButton, StepContent, TextField, useMediaQuery} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CkkChipType3 from "@/components/CkkChipType3";
import {useTheme} from "@mui/material/styles";

const steps = ['اطلاعات هویتی', 'موبایل', 'حساب بانکی', 'ایمیل'];

const CompletedStepButton = (props: {label: string}) => {
  return (
    <Button
      sx={{textWrap: 'nowrap', width: 120, minWidth: 120, justifyContent: 'space-between', color: 'text.primary'}}
      variant={'contained'}
      endIcon={<CheckCircleOutlineIcon />}
      fullWidth
      color={'success'}
    >{props.label}</Button>
  );
}
const ActiveStepButton = (props: {label: string, index: number}) => {
  return (
    <CkkChipType3 label={props.label} index={props.index} />
  );
}
const DisabledStepButton = (props: {label: string, index: number}) => {
  return (
    <Button
      sx={{minWidth: 120, justifyContent: 'space-between'}}
      variant={'outlined'}
      color={'secondary'}
      disabled
      endIcon={<Avatar sx={{width: 16, height: 16, fontSize: '12px!important'}}>{props.index}</Avatar>}
    >{props.label}</Button>
  );
}
export default function CkkStepperType1(props: {children: ReactNode}){
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const CurrentStepButton = useCallback((index, label) => {
    if(completed[index]){
      return <CompletedStepButton label={label} />
    }else if(activeStep === index){
      return <ActiveStepButton label={label} index={index}/>
    }else{
      return <DisabledStepButton label={label} index={index} />
    }
  }, [activeStep, completed])

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  return (
    <>
      <Stepper
        activeStep={activeStep}
        orientation={isXs ? 'vertical' : 'horizontal'}
        sx={{
          '& .MuiStepConnector-line.MuiStepConnector-lineHorizontal': {
            borderTopStyle: 'dashed',
            borderTopWidth: '2px'
          }
        }}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};
          labelProps.optional = (
            <Typography variant="caption">Optional</Typography>
          );

          return (
            <Step key={label} completed={completed[index]}>
              {CurrentStepButton(index, label)}
              {isXs && (
                <StepContent sx={{py: 2}}>
                  {props.children}
                </StepContent>
              )}
            </Step>
          );
        })}
      </Stepper>
      {!isXs && (
        <Box>
          {props.children}
        </Box>
      )}
    </>
  );
}