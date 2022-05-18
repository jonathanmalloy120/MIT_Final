FROM node:12

ENV PORT 3000

# Makes directory in new image
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#copies package.json to image
COPY package*.json /usr/src/app/
#runs install
RUN npm install

#copies all files into app (. means all files)
COPY . /usr/src/app

#builds app
RUN npm run build

#lets us see port 3000 to access app
EXPOSE 3000

#something?
CMD "npm" "run" "dev"