export function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve(); // Resolve immediately if script is already loaded
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

export function loadScriptWithJson(src, jsonConfig, callback, id) {
  const jsonScript = document.createElement('script');
  jsonScript.type = 'application/json';
  jsonScript.id = id;
  jsonScript.textContent = JSON.stringify(jsonConfig);
  document.head.appendChild(jsonScript);

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = () => {
      if (callback) callback();
  };

  document.head.appendChild(script);
}
