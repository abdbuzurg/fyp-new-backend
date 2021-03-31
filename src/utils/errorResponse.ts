export const errorHandler = (error: any) => {
  if (error.message) {
    return {
      success: false,
      message: error.message
    }
  } else {
    console.log(error);
    return {
      success: false,
      message: "Internal Server Error"
    }
  }
}