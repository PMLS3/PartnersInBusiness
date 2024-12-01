const { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'omni-connect-db',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

function createUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
exports.createUserRef = createUserRef;
exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

function updateUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'UpdateUser', inputVars);
}
exports.updateUserRef = updateUserRef;
exports.updateUser = function updateUser(dcOrVars, vars) {
  return executeMutation(updateUserRef(dcOrVars, vars));
};

function addAppToUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'AddAppToUser', inputVars);
}
exports.addAppToUserRef = addAppToUserRef;
exports.addAppToUser = function addAppToUser(dcOrVars, vars) {
  return executeMutation(addAppToUserRef(dcOrVars, vars));
};

function createUserWorkspaceRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'CreateUserWorkspace', inputVars);
}
exports.createUserWorkspaceRef = createUserWorkspaceRef;
exports.createUserWorkspace = function createUserWorkspace(dcOrVars, vars) {
  return executeMutation(createUserWorkspaceRef(dcOrVars, vars));
};

function updateUserWorkspaceRoleRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'UpdateUserWorkspaceRole', inputVars);
}
exports.updateUserWorkspaceRoleRef = updateUserWorkspaceRoleRef;
exports.updateUserWorkspaceRole = function updateUserWorkspaceRole(dcOrVars, vars) {
  return executeMutation(updateUserWorkspaceRoleRef(dcOrVars, vars));
};

function updateUserWorkspaceProfileRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'UpdateUserWorkspaceProfile', inputVars);
}
exports.updateUserWorkspaceProfileRef = updateUserWorkspaceProfileRef;
exports.updateUserWorkspaceProfile = function updateUserWorkspaceProfile(dcOrVars, vars) {
  return executeMutation(updateUserWorkspaceProfileRef(dcOrVars, vars));
};

function removeUserFromWorkspaceRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'RemoveUserFromWorkspace', inputVars);
}
exports.removeUserFromWorkspaceRef = removeUserFromWorkspaceRef;
exports.removeUserFromWorkspace = function removeUserFromWorkspace(dcOrVars, vars) {
  return executeMutation(removeUserFromWorkspaceRef(dcOrVars, vars));
};

function getUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUser', inputVars);
}
exports.getUserRef = getUserRef;
exports.getUser = function getUser(dcOrVars, vars) {
  return executeQuery(getUserRef(dcOrVars, vars));
};

function getUserByEmailRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUserByEmail', inputVars);
}
exports.getUserByEmailRef = getUserByEmailRef;
exports.getUserByEmail = function getUserByEmail(dcOrVars, vars) {
  return executeQuery(getUserByEmailRef(dcOrVars, vars));
};

function getUserByUsernameRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUserByUsername', inputVars);
}
exports.getUserByUsernameRef = getUserByUsernameRef;
exports.getUserByUsername = function getUserByUsername(dcOrVars, vars) {
  return executeQuery(getUserByUsernameRef(dcOrVars, vars));
};

function getWorkspaceRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetWorkspace', inputVars);
}
exports.getWorkspaceRef = getWorkspaceRef;
exports.getWorkspace = function getWorkspace(dcOrVars, vars) {
  return executeQuery(getWorkspaceRef(dcOrVars, vars));
};

function getWorkspaceBySlugRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetWorkspaceBySlug', inputVars);
}
exports.getWorkspaceBySlugRef = getWorkspaceBySlugRef;
exports.getWorkspaceBySlug = function getWorkspaceBySlug(dcOrVars, vars) {
  return executeQuery(getWorkspaceBySlugRef(dcOrVars, vars));
};

function getUserWorkspacesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUserWorkspaces', inputVars);
}
exports.getUserWorkspacesRef = getUserWorkspacesRef;
exports.getUserWorkspaces = function getUserWorkspaces(dcOrVars, vars) {
  return executeQuery(getUserWorkspacesRef(dcOrVars, vars));
};

function getProfileRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetProfile', inputVars);
}
exports.getProfileRef = getProfileRef;
exports.getProfile = function getProfile(dcOrVars, vars) {
  return executeQuery(getProfileRef(dcOrVars, vars));
};

function getUserProfilesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUserProfiles', inputVars);
}
exports.getUserProfilesRef = getUserProfilesRef;
exports.getUserProfiles = function getUserProfiles(dcOrVars, vars) {
  return executeQuery(getUserProfilesRef(dcOrVars, vars));
};

function getWorkspaceMembersRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetWorkspaceMembers', inputVars);
}
exports.getWorkspaceMembersRef = getWorkspaceMembersRef;
exports.getWorkspaceMembers = function getWorkspaceMembers(dcOrVars, vars) {
  return executeQuery(getWorkspaceMembersRef(dcOrVars, vars));
};

function searchUsersRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'SearchUsers', inputVars);
}
exports.searchUsersRef = searchUsersRef;
exports.searchUsers = function searchUsers(dcOrVars, vars) {
  return executeQuery(searchUsersRef(dcOrVars, vars));
};

function searchWorkspacesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'SearchWorkspaces', inputVars);
}
exports.searchWorkspacesRef = searchWorkspacesRef;
exports.searchWorkspaces = function searchWorkspaces(dcOrVars, vars) {
  return executeQuery(searchWorkspacesRef(dcOrVars, vars));
};

function searchProfilesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'SearchProfiles', inputVars);
}
exports.searchProfilesRef = searchProfilesRef;
exports.searchProfiles = function searchProfiles(dcOrVars, vars) {
  return executeQuery(searchProfilesRef(dcOrVars, vars));
};

