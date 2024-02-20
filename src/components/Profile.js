
import React from 'react';
import { format } from 'date-fns';
import { Box, Avatar, Typography, Chip } from '@mui/material';


export default function Profile(props) {
  return (
    <Box className="relative bg-white p-5 rounded shadow-lg mt-6" style={{ position: 'relative' }}>
      <Box className="flex items-center">
        <Avatar
          src={props.owner.avatar_url}
          alt={props.owner.login}
          loading="lazy"
          className="shadow rounded-full"
          style={{ width: '70px', height: '70px' }}
        />
        <Box className="ml-5">
          <Typography variant="h6" className="font-bold">
            {props?.owner?.login}
          </Typography>
          <Typography>{props?.name}</Typography>
        </Box>
      </Box>

      <Typography style={{marginTop: "10px"}}>
        This repository was created on{' '}
        {format(new Date(props?.created_at), 'dd MMMM yyyy')} by{' '}
        {props?.owner?.login}
      </Typography>

      <Chip
        label="Public"
        color="primary"
        className={`absolute top-3 right-5 py-1 px-2 rounded-lg shadow text-white opacity-75`}
        style={{
          position: 'absolute',
          top: '30px',
          right: '20px', 
          backgroundColor: props?.private ? '#b23c17' : '#047857',
          color: 'white',
          opacity: '0.75',
        }}
      />
      <Box className="mt-5 flex items-center justify-between text-right">
        <a
          href={props.html_url}
          target="_blank"
          rel="noreferrer"
          className="underline text-sm"
        >
          View Repo
        </a>
        <Box>
          <Typography>{props.stargazers_count.toLocaleString()} stars</Typography>
          <Typography>{props.watchers_count.toLocaleString()} Watchers</Typography>
        </Box>
      </Box>

      <Box className="flex items-center justify-between flex-wrap mt-5">
        <Box className="text-xs flex items-center justify-start">
          {props.language && (
            <Typography className="py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2">
              {props?.language ?? ""}
            </Typography>
          )}
          {props?.topics?.map(
            (topic, index) =>
              topic && (
                <Typography key={index} className="py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2">
                  {topic}
                </Typography>
              )
          )}
        </Box>

        <Typography>{props?.open_issues ?? 0} issues</Typography>
      </Box>
    </Box>
  );
}
