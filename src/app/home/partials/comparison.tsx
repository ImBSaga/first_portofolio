import { Section } from '@/components/layouts/section';
import { comparisonData } from '@/constants/comparison-data';
import Image from 'next/image';

const Comparison = () => {
  return (
    <Section
      title='Why I Stand Out'
      subtitle='A showcase of my unique approach and skill set compared to conventional front-end developers'
    >
      <table>
        <thead>
          <tr>
            <th scope='col' className='border border-gray-300 p-2 text-left'>
              Skill
            </th>
            <th scope='col' className='border border-gray-300 p-2 text-center'>
              Me
            </th>
            <th scope='col' className='border border-gray-300 p-2 text-center'>
              Other
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((comparison) => (
            <tr key={comparison.name}>
              <th
                scope='row'
                className='border border-gray-300 p-2 text-left font-medium'
              >
                {comparison.name}
              </th>
              <td
                className='border border-gray-300 p-2 text-center'
                aria-label={
                  comparison.me
                    ? 'I have this comparison'
                    : 'I do not have this comparison'
                }
              >
                {comparison.me ? (
                  <Image
                    src='/icons/icon-check.svg'
                    alt='check'
                    height={20}
                    width={20}
                    className='inline h-5 w-5 text-green-600'
                    aria-hidden='true'
                  />
                ) : (
                  <Image
                    src='/icons/icon-uncheck.svg'
                    alt='uncheck'
                    height={20}
                    width={20}
                    className='inline h-5 w-5 text-red-600'
                    aria-hidden='true'
                  />
                )}
              </td>
              <td
                className='border border-gray-300 p-2 text-center'
                aria-label={
                  comparison.other
                    ? 'Other has this comparison'
                    : 'Other does not have this comparison'
                }
              >
                {comparison.other ? (
                  <Image
                    src='/icons/icon-check.svg'
                    alt='check'
                    height={20}
                    width={20}
                    className='inline h-5 w-5 text-green-600'
                    aria-hidden='true'
                  />
                ) : (
                  <Image
                    src='/icons/icon-uncheck.svg'
                    alt='uncheck'
                    height={20}
                    width={20}
                    className='inline h-5 w-5 text-red-600'
                    aria-hidden='true'
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export default Comparison;
