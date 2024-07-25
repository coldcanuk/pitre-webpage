# Use Ubuntu as the base image
FROM ubuntu:latest

# Update and install Python and pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Create a virtual environment
RUN python3 -m venv /app/venv

# Activate the virtual environment and install dependencies
RUN /app/venv/bin/pip install --upgrade pip && \
    /app/venv/bin/pip install fastapi uvicorn openai

# Set the PATH to use the virtual environment
ENV PATH="/app/venv/bin:$PATH"

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application using Uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]