const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    return await response.json();
  } catch (error) {
    console.error("fetchTasks error:", error);
    throw error;
  }
};

export const toggleTaskCompletion = async (taskId, completed) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });
    if (!response.ok) {
      throw new Error("Failed to update task completion status.");
    }
    return await response.json();
  } catch (error) {
    console.error("toggleTaskCompletion error:", error);
    throw error;
  }
};

export const createNewTask = async (taskData) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error("Failed to create new task.");
    }
    return await response.json();
  } catch (error) {
    console.error("createNewTask error:", error);
    throw error;
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    if (!response.ok) {
      throw new Error("Failed to update task.");
    }
    return await response.json();
  } catch (error) {
    console.error("updateTask error:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("deleteTask error:", error);
    throw error;
  }
};

export const checkServer = async () => {
  try {
    const response = await fetch(`${BASE_URL}/ping`);
    return response.ok;
  } catch (error) {
    console.error("Server check error:", error);
    throw error;
  }
};
