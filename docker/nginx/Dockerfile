FROM nginx:1.13 AS base_stage

ADD ./nginx/conf/nginx.conf /etc/nginx/nginx.conf

FROM base_stage AS dev_stage
ADD ./nginx/conf/dev.conf /etc/nginx/default.conf  

FROM base_stage AS prod_stage
ADD ./nginx/conf/prod.conf /etc/nginx/default.conf