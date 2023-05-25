"use client"; // this is a client component 👈🏽
import axios from "axios";
import { useEffect, useState } from "react";

const token = "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";

function Github() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/gsleandro/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  useEffect(() => {
    const getLanguagesUrl = (repoName: string) => {
      return `https://api.github.com/repos/gsleandro/${repoName}/languages`;
    };
    if (repositories.length > 0 && languages.length === 0) {
      const updatedLanguages: any[] = [];

      repositories.forEach((repo) => {
        axios
          .get(getLanguagesUrl(repo.name), {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            const data = response.data;
            updatedLanguages.push({ repoName: repo.name, languages: data });
          })
          .catch((error) => {
            console.error(error);
          });
      });

      Promise.all(updatedLanguages).then((data) => {
        setLanguages(data);
      });
    }
  }, [repositories, languages]);

  return (
    <div>
      <ul id="Mais2">
        {Array.isArray(repositories) &&
          repositories.map((repository) => {
            const languageData = languages.find(
              (item) => item.repoName === repository.name
            );

            return (
              <li className="Card" key={repository.id}>
                <h3>{repository.name}</h3>
                <p>{repository.description}</p>
                {languageData && (
                  <p className="languages">
                    {Object.keys(languageData.languages).map((language) => {
                      return (
                        <span key={language} className="language">
                          {language}
                        </span>
                      );
                    })}
                  </p>
                )}
                <a href={repository.html_url}>Visitar</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Github;
