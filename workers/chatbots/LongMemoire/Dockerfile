# Use Ubuntu as the base image
FROM ubuntu:latest

# Update and install Python and pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip

# Set the working directory in the container
WORKDIR /app

# Copy the chatbot app.py to /app
COPY app.py /app/

# Install common dependencies for chatbots
RUN pip3 install fastapi uvicorn openai

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application using Uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]