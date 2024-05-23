FROM nginx:1.19

COPY ./dist/curriculum2.1/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]