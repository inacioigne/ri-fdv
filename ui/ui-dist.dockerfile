FROM docker.io/node:22-alpine
RUN npm install --global pm2

COPY --chown=node:node /dist /app/dist
COPY --chown=node:node /config /app/config
COPY --chown=node:node /docker/dspace-ui.json /app/dspace-ui.json

WORKDIR /app
USER node
ENV NODE_ENV=production
EXPOSE 4000

# On startup, run start the DSpace UI in PM2
ENTRYPOINT [ "pm2-runtime", "start", "dspace-ui.json" ]
# By default, pass param that specifies to use JSON format logs.
CMD ["--json"]