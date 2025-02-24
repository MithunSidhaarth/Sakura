FROM python:latest
ENV VIRTUAL_ENV "/venv"
RUN python -m venv $VIRTUAL_ENV
ENV PATH "$VIRTUAL_ENV/bin:$PATH"
RUN apt update
RUN apt upgrade -y
RUN apt install git -y
RUN apt install curl -y
RUN apt install ffmpeg -y
RUN apt install nodejs -y
RUN apt install python3 -y
RUN apt install bpm-tools -y
RUN apt install opus-tools -y
RUN apt install python3-pip -y
RUN apt install npm -y
RUN npm install --global n
RUN path=path
RUN hash -r
RUN n install 16
RUN git clone https://github.com/Krakinz/Sakura.git
RUN cd Sakura
WORKDIR /Sakura
RUN npm install --force
RUN pip install -r ӄʀǟӄɨռʐ🐙ʟǟɮ.txt
CMD python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py