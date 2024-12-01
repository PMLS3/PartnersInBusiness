export const showErrors = (error: any) => {
  const toaster = useToaster()
  toaster.show({
    title: "Error",
    message: error.message || error,
    color: "danger",
    icon: "ph:warning-circle-fill",
    closable: true,
  })
}

export const showSuccess = (message: string) => {
  const toaster = useToaster()
  toaster.show({
    title: "Success",
    message,
    color: "success",
    icon: "ph:check-circle-fill",
    closable: true,
  })
}
