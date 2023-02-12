//Actions

export const addTodo = (text: string) => {
    return {
      type: 'ADD_TODO',
      payload: {
        text
      }
    }
  }
  
export const completedTodo = (id: Number) => {
    return {
      type: 'COMPLETED_TODO',
      payload: {
        id
      }
    }
  }