import { Button } from '@/components/ui/button';
import { projectData } from '@/constants/project-data';
import Link from 'next/link';

const Projects = () => {
  return (
    <section
      id='projects'
      className='custom-container py-5xl md:py-8xl gap-4xl md:gap-6xl flex flex-col'
    >
      {/* Heading */}
      <div className='gap-lg flex flex-col md:flex-row md:gap-0'>
        <h2 className='text-display-sm md:text-display-2xl text-left font-extrabold text-neutral-100 md:flex-1'>
          My Projects
        </h2>
        <p className='font-regular md:text-md text-sm text-neutral-200 md:flex-1 md:text-right'>
          A collection of full-stack and frontend web applications built with
          modern technologies like React, Next.js, and TypeScript.
        </p>
      </div>

      {/* Cards */}
      <div className='gap-4xl md:gap-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projectData.map((project, index) => (
          <div
            key={index}
            className='p-lg gap-lg md:p-3xl md:gap-xl flex flex-col rounded-4xl bg-neutral-500 transition-colors duration-300 hover:bg-neutral-400'
          >
            {/* Project Number */}
            <div className='from-purple-pink-600 to-purple-pink-500 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r'>
              <span className='text-sm font-bold text-white'>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h3 className='text-md md:text-display-xs font-bold text-neutral-100'>
              {project.name}
            </h3>

            {/* Description */}
            <p className='flex-1 text-sm font-normal text-neutral-200'>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className='flex flex-wrap gap-2'>
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className='rounded-full bg-neutral-600 px-3 py-1 text-xs font-medium text-neutral-100'
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className='mt-2 flex items-center gap-4'>
              {/* GitHub Link */}
              <Link
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='from-purple-pink-600 to-purple-pink-500 flex items-center gap-2 bg-linear-to-r bg-clip-text text-sm font-medium text-transparent transition-opacity hover:opacity-80'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='text-purple-pink-500 shrink-0'
                >
                  <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z' />
                </svg>
                Source
              </Link>

              {/* Live Link */}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='from-purple-pink-600 to-purple-pink-500 flex items-center gap-2 bg-linear-to-r bg-clip-text text-sm font-medium text-transparent transition-opacity hover:opacity-80'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-purple-pink-500 shrink-0'
                  >
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                    <polyline points='15 3 21 3 21 9' />
                    <line x1='10' y1='14' x2='21' y2='3' />
                  </svg>
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center'>
        <Link
          href='https://github.com/ImBSaga'
          target='_blank'
          rel='noopener noreferrer'
          className='w-full md:w-fit'
        >
          <Button
            size='default'
            variant='default'
            className='gap-sm w-full md:w-64'
          >
            <span>View More on GitHub</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
